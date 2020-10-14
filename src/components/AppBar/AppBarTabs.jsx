import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../Text';
import { useQuery } from '@apollo/react-hooks';
import { CHECK_AUTH } from '../../graphql/queries';
import useLogOut from '../../hooks/useLogOut';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

const AppBarTabs = () => {

  const { data, error, loading } = useQuery(CHECK_AUTH);

  const logout = useLogOut();

  if (loading) {
    return <Text>Loading . . .</Text>;
  }

  return (
    <View style={styles.container}>
      <Link to="/">
        <Text fontSize="tab" color="tabText" >Repositories</Text>
      </Link>
      {
        !data.authorizedUser
          ?
          <Link to="/signin">
            <Text fontSize="tab" color="tabText">Sign In</Text>
          </Link>
          : <Text onPress={() => logout()} fontSize="tab" color="tabText">Log out</Text>
      }
    </View>
  );
};

export default AppBarTabs;