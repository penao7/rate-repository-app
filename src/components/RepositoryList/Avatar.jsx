import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  avatar: {
    display: 'flex',
    flexGrow: 0,
    marginRight: 10,
    marginLeft: 10
  },
  avatarImage: {
    width: 85,
    height: 85,
    borderRadius: 10,
  },
});

const Avatar = ({ avatarUrl }) => {
  return (
    <View style={styles.avatar}>
      <Image
        source={{ uri: avatarUrl }}
        style={styles.avatarImage}
      />
    </View>
  );
};

export default Avatar;