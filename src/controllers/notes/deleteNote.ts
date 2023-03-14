import { Request, Response } from 'express';
import { deleteNotes } from '../../data/notes/deleteNotes';
import { User } from '../../types/user';

export const deleteNote = (req: Request, res: Response) => {
  const { id: noteId } = req.params;

  const { id: userId } = req['user'] as User;

  deleteNotes({ userId, noteId });

  res.json({ message: 'Note successfully deleted!' });
};
