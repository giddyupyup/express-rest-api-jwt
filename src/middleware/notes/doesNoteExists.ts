import { NextFunction, Request, Response } from 'express';
import { isEmpty } from 'lodash';
import { findOneNote } from '../../data/notes/findOneNote';
import { User } from '../../types/user';

export const doesNoteExists = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id: noteId } = req.params;

  const { id: userId } = req['user'] as User;

  const note = findOneNote(
    (note) => noteId === note.id && userId === note.userId
  );

  if (isEmpty(note)) {
    return res
      .status(400)
      .json({ error: `Note does not exists with noteId=${noteId}` });
  }

  next();
};
