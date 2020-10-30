import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';
import { StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepository from './SingleRepository/SingleRepository';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/myreviews">
          <MyReviews/>
        </Route>
        <Route path="/review">
          <CreateReview />
        </Route>
        <Route path="/:repoId">
          <SingleRepository />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;