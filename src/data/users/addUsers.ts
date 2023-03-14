import { User } from '../../types/user';
import { getUsers } from './getUsers';
import { saveUsers } from './saveUsers';

export const addUsers = (user: User) => {
  const users = getUsers().concat(user);

  saveUsers(users);

  return user;
};
