import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  details: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center'
  },
  rowBottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 5
  },
});

const prettifyNumbers = (number) => {
  if (number < 1000) {
    return number;
  }
  if (number <= 9999) {
    const thousands = number.toString().substring(0, 1);
    const hundreds = number.toString().substring(1, 2);
    return `${thousands.concat(',', hundreds)}k`;
  }
  const tensOfThousands = number.toString().substring(0, 2);
  const thousands = number.toString().substring(2, 3);
  const combinedNumber = tensOfThousands.concat(',', thousands);

  return `${combinedNumber}k`;
};

const RenderValue = ({ value, name }) => {
  return (
    <View style={styles.details}>
      <Text fontWeight="bold">{prettifyNumbers(value)}</Text>
      <Text>{name}</Text>
    </View>
  );
};

const RepositoryDetails = ({ stars, reviews, forks, rating }) => {

  const valueList = [
    {
      'name': 'Stars',
      value: stars
    },
    {
      'name': 'Reviews',
      value: reviews
    },
    {
      'name': 'Forks',
      value: forks
    },
    {
      'name': 'Rating',
      value: rating
    }
  ];

  return (
    <View style={styles.rowBottomContainer}>
      {valueList.map(data => (
        <RenderValue key={data.name} name={data.name} value={data.value} />
      ))}
    </View>
  );
};

export default RepositoryDetails;