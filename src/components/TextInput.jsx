import React from 'react';

import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  field: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    marginTop: 20,
  },
  error: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginTop: 20,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.field, style];

  return <NativeTextInput style={!error ? textInputStyle : styles.error} {...props} />;
};

export default TextInput;