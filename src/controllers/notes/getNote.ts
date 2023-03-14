import { Request, Response } from 'express';
import { findOneNote } from '../../data/notes/findOneNote';
import { User } from '../../types/user';

export const getNote = (req: Request, res: Response) => {
  const { id: userId } = req['user'] as User;

  const { id: noteId } = req.body;

  const note = findOneNote(
    (note) => noteId === note.id && userId === note.userId
  );

  res.json({ message: 'Success', data: note });
};
