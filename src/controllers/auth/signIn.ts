import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { findOneUser } from '../../data/users/findOneUser';
import { updateUsers } from '../../data/users/updateUsers';

export const signIn = (req: Request, res: Response) => {
  const { userName } = req.body;

  const currentUser = findOneUser((user) => userName === user.userName);

  const token =
    currentUser?.token ||
    sign({ userName }, process.env.JWT_SECRET_KEY || 'jwt-secret-key');

  updateUsers({ userName, token });

  res.json({ message: 'Sign in successfully', token });
};
