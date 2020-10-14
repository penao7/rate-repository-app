import React from 'react';
import { Link } from 'react-router-native';
import RepositoryList from '../RepositoryList';
import Text from '../Text';

const RepositoriesTab = () => {
  return (
    <Link to="/" component={RepositoryList}>
      <Text fontSize="subheading" fontWeight="bold">Repositories</Text>
    </Link>
  );
};

export default RepositoriesTab;