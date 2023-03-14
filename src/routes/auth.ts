import { Router } from 'express';
import { signIn } from '../controllers/auth/signIn';
import { signOut } from '../controllers/auth/signOut';
import { signUp } from '../controllers/auth/signUp';
import { jwtVerify } from '../middleware/users/jwtVerify';
import { verifyUsers } from '../middleware/users/verifyUsers';

const authRoute = Router();

authRoute.post('signup', verifyUsers({ isSignIn: false }), signUp);
authRoute.post('signin', verifyUsers({ isSignIn: true }), signIn);
authRoute.post('signout', jwtVerify, signOut);

export default authRoute;
