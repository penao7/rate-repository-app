import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  details: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center'
  },
  rowBottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10
  },
});

const RepositoryDetails = ({ stars, reviews, forks, rating }) => {

  const prettifyNumbers = (number) => {
    if (number < 1000) {
      return number;
    }
    if (number <= 9999) {
      return `${number.toString().substring(0, 1)}k`;
    }
    const tensOfThousands = number.toString().substring(0, 2);
    const thousands = number.toString().substring(2, 3);
    const combinedNumber = tensOfThousands.concat(',', thousands);

    return `${combinedNumber}k`;
  };

  return (
    <View style={styles.rowBottomContainer}>
      <View style={styles.details}>
        <Text fontWeight="bold">{prettifyNumbers(stars)}</Text>
        <Text>Stars</Text>
      </View>
      <View style={styles.details}>
        <Text fontWeight="bold">{prettifyNumbers(forks)}</Text>
        <Text>Forks</Text>
      </View>
      <View style={styles.details}>
        <Text fontWeight="bold">{prettifyNumbers(reviews)}</Text>
        <Text>Reviews</Text>
      </View>
      <View style={styles.details}>
        <Text fontWeight="bold">{prettifyNumbers(rating)}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  );
};

export default RepositoryDetails;