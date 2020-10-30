import React from 'react';
import Text from './Text';

const Subheading = ({ children }) => {

  return (
    <Text fontSize="subheading">{children}</Text>
  );
};

export default Subheading;