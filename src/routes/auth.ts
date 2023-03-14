import { Router } from 'express';

const authRoute = Router();

authRoute.post('signup', signUp);
authRoute.post('signin', signIn);
authRoute.post('signout', signOut);

export default authRoute;
