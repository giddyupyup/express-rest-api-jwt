import { User } from '../../types/user';
import { getUsers } from './getUsers';

export const findOneUser = (predicate: (user: User) => boolean) =>
  getUsers().find(predicate);
