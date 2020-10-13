import React from 'react';
import Text from './Text';

const Heading = ({ children, ...props }) => {

  return (
    <Text fontSize="heading" color="primary" {...props}>{children}</Text>
  );
};

export default Heading;