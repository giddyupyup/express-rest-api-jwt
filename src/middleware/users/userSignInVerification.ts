import { findOneUser } from '../../data/users/findOneUser';
import { isEmpty } from 'lodash';
import { compareSync } from 'bcrypt';

export const userSignInVerification = ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  const currentUser = findOneUser((user) => userName === user.userName);

  if (isEmpty(currentUser)) {
    return {
      isError: true,
      statusCode: 404,
      error: 'User does not exists',
    };
  }

  if (currentUser && !compareSync(password, currentUser.password)) {
    return {
      isError: true,
      statusCode: 400,
      error: 'Incorrect userName and password',
    };
  }

  return {
    isError: false,
    statusCode: 200,
  };
};
