import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  floatRight: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 10
  }
});

const SignUpForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <FormikTextInput name="passwordConfirm" placeholder="Password confirmation" />
      <View style={styles.floatRight}>
        <Button color='primary' onPress={onSubmit} title="Sign up" />
      </View>
    </View>
  );
};

export default SignUpForm;