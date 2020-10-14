import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryDetails from './RepositoryDetails';
import RepositoryHeader from './RepositoryHeader';

const styles = StyleSheet.create({
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10
  }
});

const RepositoryItem = ({ item }) => {

  return (
    <View style={styles.columnContainer}>
      <RepositoryHeader
        image={item.ownerAvatarUrl}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />
      <RepositoryDetails
        rating={item.ratingAverage}
        stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
      />
    </View>
  );
};

export default RepositoryItem;