import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  navtext: {
    marginLeft: 20
  }
});

const NavButton = ({ children, style, route, ...props }) => {

  const navTextStyle = [styles.navtext, style];

  return (
    <Link to={route} component={TouchableOpacity}>
      <Text style={navTextStyle} fontSize="tab" color="tabText" {...props}>{children}</Text>
    </Link>
  );
};

export default NavButton;