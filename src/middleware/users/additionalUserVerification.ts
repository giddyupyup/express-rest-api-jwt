import { userSignInVerification } from './userSignInVerification';
import { userSignUpVerification } from './userSignUpVerification';

export const additionalUserVerification = (isSignIn: boolean) => {
  return isSignIn ? userSignInVerification : userSignUpVerification;
};
