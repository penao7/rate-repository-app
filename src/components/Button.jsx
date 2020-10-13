import React from 'react';
import { Text as NativeButton, StyleSheet, View, TouchableOpacity } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center'
  },
  buttonBody: {
    padding: 8,
    width: 75,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    backgroundColor: theme.colors.buttonPrimary,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.buttonPrimaryText,
  }
});

const Button = ({ style, title, ...props }) => {

  const buttonStyle = [styles.buttonBody, style];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={buttonStyle} {...props}>
        <NativeButton style={styles.buttonText}>{title}</NativeButton>
      </TouchableOpacity>
    </View>
  );
};

export default Button;