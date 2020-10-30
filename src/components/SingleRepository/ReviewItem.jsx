import React from 'react';
import RatingTag from './RatingTag';
import { View, StyleSheet } from 'react-native';
import Heading from '../Heading';
import Text from '../Text';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    paddingBottom: 10,
    flexShrink: 1,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  emptySpace: {
    width: 60,
    marginRight: 5,
  },
});

const ReviewItem = ({ review }) => {

  const date = new Date(review.createdAt);

  return (
    <View style={styles.columnContainer}>
      <View style={styles.rowContainer}>
        <RatingTag rating={review.rating} />
        <View style={styles.headerContainer}>
          <Heading fontWeight='bold'>{review.user.username}</Heading>
          <Text fontSize='subheading'>{format(date, 'dd.MM.yyyy')}</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.emptySpace}></View>
        <View style={styles.columnContainer}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;