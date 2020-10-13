import React from 'react';
import Avatar from './Avatar';
import RepoHeadings from './RepoHeadings';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20
  }
});

const RepositoryHeader = ({
  image,
  fullName,
  description,
  language
}) => {
  return (
    <View style={styles.rowContainer}>
      <Avatar avatarUrl={image} />
      <RepoHeadings
        fullName={fullName}
        description={description}
        language={language}
      />
    </View>
  );
};

export default RepositoryHeader;

