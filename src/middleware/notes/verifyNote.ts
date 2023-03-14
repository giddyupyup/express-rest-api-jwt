import { NextFunction, Request, Response } from 'express';
import { isEmpty } from 'lodash';

export const verifyNote = (req: Request, res: Response, next: NextFunction) => {
  if (isEmpty(req.body)) {
    return res.status(400).json({ error: 'Request body is missing!' });
  }

  const { title, content } = req.body;

  if (isEmpty(title) || isEmpty(content)) {
    return res
      .status(400)
      .json({ error: 'Missing title and content on the request body' });
  }

  next();
};
