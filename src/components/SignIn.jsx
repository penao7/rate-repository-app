import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: ''
};

const onSubmit = credentials => {
  const username = credentials.username;
  const password = credentials.password;

  console.log(`trying to log in with credentials ${username} ${password}`);
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