import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  emptySpace: {
    width: 60,
    height: 60,
    marginRight: 5,
  },
  reviewTag: {
    display: 'flex',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 60 / 2,
    borderWidth: 2,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: theme.colors.primary,
    color: theme.colors.primary
  },
});

const RatingTag = ({ rating }) => {
  return (
    <Text style={[styles.reviewTag, styles.emptySpace]}>{rating}</Text>
  );
};

export default RatingTag;