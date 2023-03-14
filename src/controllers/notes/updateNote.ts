import { Request, Response } from 'express';
import { updateNotes } from '../../data/notes/updateNotes';
import { User } from '../../types/user';

export const updateNote = (req: Request, res: Response) => {
  const { id: noteId } = req.params;
  const { id: userId } = req['user'] as User;

  const { title, content } = req.body;

  const note = updateNotes({
    userId,
    noteId,
    title,
    content,
  });

  res.status(201).json({ message: 'Note successfully updated', data: note });
};
