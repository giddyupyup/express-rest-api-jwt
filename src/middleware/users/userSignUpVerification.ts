import { findOneUser } from '../../data/users/findOneUser';
import { isEmpty } from 'lodash';

export const userSignUpVerification = ({ userName }: { userName: string }) => {
  const userExists = findOneUser((user) => userName === user.userName);

  if (!isEmpty(userExists)) {
    return {
      isError: true,
      statusCode: 409,
      error: 'User already exists!',
    };
  }

  return {
    isError: false,
    statusCode: 200,
  };
};
