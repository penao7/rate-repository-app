import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const FilterDropdown = ({ setFilter, repoFilter }) => {
  return (
    <RNPickerSelect
      onValueChange={(value) => setFilter(value)}
      placeholder={{ label: 'Click to filter' }}
      value={repoFilter}
      items={[
        { label: 'Latest repositories', value: '' },
        { label: 'Sort by rating', value: 'RATING_AVERAGE' },
        { label: 'Sort by date', value: 'CREATED_AT' },
      ]}
    />
  );
};

export default FilterDropdown;