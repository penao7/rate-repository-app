import React from 'react';
import FormikTextInput from '../components/FormikTextInput';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { View } from 'react-native';
import Button from '../components/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const Form = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput name="username" placeholder="username" testID="usernameField" />
      <FormikTextInput name="password" placeholder="password" testID="passwordField" />
      <View>
        <Button onPress={onSubmit} title="Sign in" testID="submitButton" />
      </View>
    </View>
  );
};

const SignInForm = ({ onSubmit }) => {

  const initialValues = { username: '', password: '' };
  const signInSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signInSchema}
    >
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  );
};

describe('SignInForm', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />);

    await waitFor(async () => {
      await fireEvent.changeText(getByTestId('usernameField'), 'pena');
      await fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));
    });

    await act(async () => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'pena',
        password: 'password'
      });
    });
  });
  it('returns input error if username is empty', async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />);

    await waitFor(async () => {
      await fireEvent.changeText(getByTestId('usernameField'), '');
      await fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));
    });

    expect(getByTestId('inputError')).toHaveTextContent('Username is required');

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
  it('returns input error if password is empty', async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />);

    await waitFor(async () => {
      await fireEvent.changeText(getByTestId('usernameField'), 'pena');
      await fireEvent.changeText(getByTestId('passwordField'), '');
      fireEvent.press(getByTestId('submitButton'));
    });

    expect(getByTestId('inputError')).toHaveTextContent('Password is required');

    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
