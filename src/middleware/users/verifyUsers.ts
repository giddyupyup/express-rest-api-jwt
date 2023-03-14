import { NextFunction, Request, Response } from 'express';
import { isEmpty } from 'lodash';
import { additionalUserVerification } from './additionalUserVerification';

export const verifyUsers =
  ({ isSignIn }: { isSignIn: boolean }) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (isEmpty(req.body)) {
      return res.status(400).json({ error: 'Request body is missing!' });
    }

    const { userName, password } = req.body;

    if (isEmpty(userName) || isEmpty(password)) {
      return res
        .status(400)
        .json({ error: 'Missing userName and password in request body' });
    }

    const additionalVerification = additionalUserVerification(isSignIn);

    const { isError, statusCode, error } = additionalVerification({
      userName,
      password,
    });

    if (isError) {
      return res.status(statusCode).json({ error });
    }

    next();
  };
