import React from 'react';
import { Formik } from 'formik';
import SignUpForm from './SignUpForm';
import * as yup from 'yup';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
};

const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required('Password confirm is required')
});


const SignUp = () => {

  const history = useHistory();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async credentials => {
    const { username, password } = credentials;

    try {
      const data = await signUp({ username, password });

      if (data.createUser) {
        const { authorize } = await signIn({ username, password });
        if (authorize.accessToken) {
          history.push('/');
        }
      }

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signUpSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};


export default SignUp;