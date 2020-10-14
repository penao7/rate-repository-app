import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'lightgrey'
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const repositories = useRepositories();

  if (repositories.loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

const repositoryNodes = repositories.data.repositories.edges
  ? repositories.data.repositories.edges.map(edge => edge.node)
  : [];

return (
  <View style={{ flex: 1 }}>
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      keyExtractor={repo => repo.id}
    />
  </View>
);
};




export default RepositoryList;