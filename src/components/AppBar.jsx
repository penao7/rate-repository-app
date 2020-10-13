import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTabs from './AppBarTabs';
import themes from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: themes.colors.tabBackGround,
    paddingBottom: 20
  },
  tabStyles: {
    flex: 1,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.tabStyles}
      >
        {<AppBarTabs />}
      </ScrollView>
    </View>
  );
};

export default AppBar;