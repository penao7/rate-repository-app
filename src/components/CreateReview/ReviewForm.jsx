import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  floatRight: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 10
  }
});

const ReviewForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <View>
        <FormikTextInput name="username" placeholder="Repository owner name" />
        <FormikTextInput name="repository" placeholder="Repository name" />
        <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
        <FormikTextInput name="review" placeholder="Review" />
      </View>
      <View style={styles.floatRight}>
        <Button color='primary' onPress={onSubmit} title="Create a review" />
      </View>
    </View >

  );
};

export default ReviewForm;