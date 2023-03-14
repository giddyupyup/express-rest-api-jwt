import { NextFunction, Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { isEmpty } from 'lodash';
import { findOneUser } from '../../data/users/findOneUser';

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
  if (isEmpty(req.headers.authorization)) {
    return res.status(401).json({ error: 'User not authorized!' });
  }

  const authHeader = req.headers.authorization as string;
  const token = authHeader.split(' ')[1];

  try {
    const { userName } = verify(
      token,
      process.env.JWT_SECRET_KEY || 'jwt-secret-key'
    ) as JwtPayload;

    const user = findOneUser((user) => userName === user.userName);

    if (isEmpty(user)) {
      return res.status(403).json({ error: 'Forbidden!' });
    }

    if (token !== user.token) {
      return res.status(401).json({ error: 'User not authorized!' });
    }

    req['user'] = user;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'User not authorized!' });
  }
};
