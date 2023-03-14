import { hashSync } from 'bcrypt';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { addUsers } from '../../data/users/addUsers';

export const signUp = (req: Request, res: Response) => {
  const { userName, password } = req.body;

  const id = uuidv4();
  const hashPassword = hashSync(password, 10);

  const user = addUsers({
    id,
    userName,
    password: hashPassword,
  });

  res.status(201).json({ message: 'User successfully created!' });
};
