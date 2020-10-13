import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

const AppBarTabs = () => {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text fontSize="tab" color="tabText" >Repositories</Text>
      </Link>
      <Link to="/signin">
        <Text fontSize="tab" color="tabText">Sign In</Text>
      </Link>
    </View>
  );
};

export default AppBarTabs;