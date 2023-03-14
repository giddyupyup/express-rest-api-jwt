import { writeFile } from 'fs/promises';
import { join } from 'path';
import { User } from '../../types/user';

export const saveUsers = (users: User[]) => {
  writeFile(join(__dirname, './users.json'), JSON.stringify(users, null, 2));
};
