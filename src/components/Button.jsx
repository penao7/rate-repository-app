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
    width: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.buttonPrimaryText,
  },
  buttonColorPrimary: {
    backgroundColor: theme.colors.buttonPrimary
  },
  buttonColorDanger: {
    backgroundColor: theme.colors.buttonDanger
  }
});

const Button = ({ color, style, title, ...props }) => {

  const buttonStyle = [
    styles.buttonBody,
    color === 'danger' && styles.buttonColorDanger,
    color === 'primary' && styles.buttonColorPrimary,
    style
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={buttonStyle} {...props}>
        <NativeButton style={styles.buttonText}>{title}</NativeButton>
      </TouchableOpacity>
    </View>
  );
};

export default Button;