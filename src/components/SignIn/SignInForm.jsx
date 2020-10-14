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
    alignItems: 'flex-end'
  }
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" />
      <View style={styles.floatRight}>
        <Button onPress={onSubmit} title="Sign in" />
      </View>
    </View>
  );
};

export default SignInForm;