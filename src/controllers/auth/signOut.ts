import { Request, Response } from 'express';
import { updateUsers } from '../../data/users/updateUsers';

export const signOut = (req: Request, res: Response) => {
  const user = req['user'];

  updateUsers({
    userName: user.userName,
    token: null,
  });

  res.json({ message: 'Sign out successfully!' });
};
