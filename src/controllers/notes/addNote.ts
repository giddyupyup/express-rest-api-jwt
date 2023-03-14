import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { addNotes } from '../../data/notes/addNotes';
import { User } from '../../types/user';

export const addNote = (req: Request, res: Response) => {
  const { id: userId } = req['user'] as User;

  const { title, content } = req.body;

  const id = uuidv4();

  const note = addNotes({
    id,
    userId,
    title,
    content,
  });

  res.status(201).json({ message: 'Note successfully added!', data: note });
};
