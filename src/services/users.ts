const BASE_URL = 'https://api.stackexchange.com/2.2';

export const getUsersByReputation = (pageSize = 20) => fetch(`${BASE_URL}/users?pagesize=${pageSize}&order=desc&sort=reputation&site=stackoverflow`);