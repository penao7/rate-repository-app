import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import Heading from '../Heading';

const styles = StyleSheet.create({
  headings: {
    display: 'flex',
    flexGrow: 1,
    marginRight: 25,
    flexShrink: 1,
  },
  languageTag: {
    marginTop: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    width: 100,
    height: 30,
  }
});

const RepoHeadings = ({ fullName, description, language }) => {
  return (
    <View style={styles.headings}>
      <Heading fontWeight="bold">{fullName}</Heading>
      <Text fontSize="subheading">{description}</Text>
      <View style={styles.languageTag}>
        <Text color="languageText">{language}</Text>
      </View>
    </View>
  );
};

export default RepoHeadings;