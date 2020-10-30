import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavButton from '../NavButton';
import useLogOut from '../../hooks/useLogOut';
import useAuthCheck from '../../hooks/useAuthCheck';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  }
});

const AppBarTabs = () => {

  const { user, loading } = useAuthCheck();
  const logout = useLogOut();

  console.log('auth', user);

  if (loading) {
    return <Text>Loading</Text>;
  }

  const handleLogout = async () => {
    console.log('handlelogout');
    try {
      await logout();
    } catch (e) {
      console.log('logouterror', e);
    }
  };

  return (
    <View style={styles.container}>
      <NavButton route='/'>Repositories</NavButton>
      {
        !user
          ?
          <View style={styles.container}>
            <NavButton route='/signin'>Sign in</NavButton>
            <NavButton route='/signup'>Sign up</NavButton>
          </View>
          :
          <View style={styles.container}>
            <NavButton route='/myreviews'>My Reviews</NavButton>
            <NavButton route='/review'>Create a review</NavButton>
            <NavButton onPress={() => handleLogout()}>Log out</NavButton>
          </View>
      }
    </View>
  );
};

export default AppBarTabs;