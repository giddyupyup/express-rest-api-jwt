import { getUsers } from './getUsers';
import { saveUsers } from './saveUsers';

export const updateUsers = ({
  userName,
  token,
}: {
  userName: string;
  token: string | null;
}) => {
  const users = getUsers();

  const userIndex = users.findIndex((user) => userName === user.userName);

  const updatedUser = {
    ...users[userIndex],
    token,
  };

  users.splice(userIndex, 1, updatedUser);

  saveUsers(users);

  return updatedUser;
};
