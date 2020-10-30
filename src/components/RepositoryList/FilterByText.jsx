import React from 'react';
import { Searchbar } from 'react-native-paper';

const FilterByText = ({ setTextFilter, textFilter }) => {

  return (
    <Searchbar
      value={textFilter}
      placeholder='Type to filter'
      onChangeText={(value) => setTextFilter(value)}
    />
  );
};

export default FilterByText;