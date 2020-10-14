import React from 'react';
import { Link } from 'react-router-native';
import SignIn from '../SignIn';
import Text from '../Text';

const SignInTab = () => {

  return (
    <Link to="/signin" component={() => <SignIn/>}>
      <Text fontSize="subheading" fontWeight="bold">Sign In</Text>
    </Link>
  );
};

export default SignInTab;