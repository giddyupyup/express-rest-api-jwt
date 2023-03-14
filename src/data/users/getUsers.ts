import { User } from '../../types/user';
import users from './users.json';

export const getUsers = () => [...users] as User[];
