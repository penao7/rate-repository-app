import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
  username: '',
  password: ''
};

const signInSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});


const SignIn = () => {

  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async credentials => {
    const { username, password } = credentials;

    try {
      const { authorize } = await signIn({ username, password });

      console.log('authorize', authorize);

      if (authorize.accessToken) {
        history.push('/');
      }

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signInSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


export default SignIn;