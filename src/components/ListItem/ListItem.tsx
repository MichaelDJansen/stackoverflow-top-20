import React, { useState } from 'react';
import "./ListItem.css";

// Types
interface ListItemProps {
  id: number;
  name: string;
  avatar: string;
  reputation: number;
  isBlocked: boolean;
  isFollowed: boolean;
  onBlockClick: (id: number) => void;
  onFollowClick: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ 
  id, 
  name, 
  avatar, 
  reputation, 
  isBlocked, 
  isFollowed, 
  onBlockClick, 
  onFollowClick 
}) => {
  // Hooks
  const [expanded, setExpanded] = useState(false);

  // Functions
  const onItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setExpanded(!expanded);
  }

  const handleBlockButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setExpanded(false);
    onBlockClick(id);
  }

  const handleFollowButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onFollowClick(id);
  }

  // Render
  return (
    <div 
      className={`list-item ${isBlocked ? 'blocked' : ''}`}
      onClick={isBlocked ? undefined : onItemClick}
    >
      <div className="list-item-collapsed-section">
        <div className="avatar-container">
          <img src={avatar} alt="avatar"/>
          {isFollowed && <img src="/gold-star.png" alt="followed"/>}
        </div>
        <div className="name-container">
          <span className="heading">Name</span>
          <span>{name} {isBlocked && "Blocked"}</span>
        </div>
        <div className="reputation-container">
          <span className="heading">Reputation</span>
          <span>{reputation}</span>
        </div>
      </div>
      {
        expanded && (
          <div className={`list-item-expanded-section`}>
            <div className='button-container'>
              <div 
                className="button favourite-button"
                onClick={handleFollowButtonClick}
              >
                {isFollowed ? 'Unfollow' : 'Follow'}
              </div>
              <div 
                className="button block-button"
                onClick={handleBlockButtonClick}
              >
                Block
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ListItem;