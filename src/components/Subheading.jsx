import React from 'react';
import Text from './Text';

const Subheading = ({ children, ...props }) => {

  return (
    <Text fontSize="subheading" {...props}>{children}</Text>
  );
};

export default Subheading;