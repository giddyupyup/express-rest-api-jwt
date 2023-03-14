import { Request, Response } from 'express';
import { findNotes } from '../../data/notes/findNotes';
import { User } from '../../types/user';

export const getAllNotes = (req: Request, res: Response) => {
  const { id: userId } = req['user'] as User;

  const notes = findNotes((note) => userId === note.userId);

  res.json({ message: 'Success!', data: notes });
};
