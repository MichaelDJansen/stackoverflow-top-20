import React, { useEffect, useState } from 'react';
import './App.css';
import { User, UsersResponse } from '../../models/user';
import ListItem from '../../components/ListItem/ListItem';
import { getUsersByReputation } from '../../services/users';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// Types
type userStatus = {
  blocked?: boolean;
  followed?: boolean;
}

interface UserStatusList {
  [key: number]: userStatus
}

const App = () => {
  // Hooks
  const [users, setUsers] = useState(new Array<User>());
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userStatusList, setUserStatusList] = useState<UserStatusList>({});

  useEffect(() => {
    // Get User Data 
    getUsersByReputation()
    .then(result => {
      if (result?.ok) {
        return result.json();
      }
      throw result;
    })
    .then((data: UsersResponse) => {
      setUsers(data?.items);
    })
    .catch((e) => {
      setIsError(true)
      console.error(`${e.status} ${e.statusText}`)
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  const onBlockClick = (id: number) => {
    const newUsersStatusList = {
      ...userStatusList, 
      // Add Blocked Status to user
      [id]: { blocked: true }
    };

    setUserStatusList(newUsersStatusList);
  }

  const onFollowClick = (id: number) => {
    const userFollowStatus = userStatusList[id]?.followed || false;

    const newUsersStatusList = {
      ...userStatusList, 
      // Toggle Follow Status
      [id]: { followed: !userFollowStatus }
    };

    setUserStatusList(newUsersStatusList);
  }

  return (
    <div className="App">
      <h1>StackOverflow Top 20</h1>
      {isError && 
        <div className="error-message">Apologies, an error has occurred while fetching data</div>
      }
      {isLoading && <LoadingSpinner />}
      <div className="list-items">
        {users && users.length > 0 && users.map((user) => (
          <ListItem 
            name={user.display_name}
            avatar={user.profile_image}
            reputation={user.reputation}
            id={user.user_id}
            isBlocked={userStatusList[user.user_id]?.blocked || false}
            isFollowed={userStatusList[user.user_id]?.followed || false}
            onBlockClick={onBlockClick}
            onFollowClick={onFollowClick}
            key={user.user_id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
