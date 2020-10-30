import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useHistory } from 'react-router-native';
import Loading from '../Loading';
import FilterDropdown from './FilterDropdown';
import { useDebounce } from 'use-debounce';
import FilterByText from './FilterByText';

const styles = StyleSheet.create({
  separator: {
    height: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'lightgrey'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    const props = this.props;

    return (
      <View>
        <FilterByText setTextFilter={props.setTextFilter} textFilter={props.textFilter} />
        <FilterDropdown setFilter={props.setFilter} filter={props.filter} />
      </View>
    );
  };

  renderFooter = () => {
    if(!this.props.loading) {
      return null;
    }

    return (
      <Loading />
    );
  };

  render() {

    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map(edge => edge.node)
      : [];

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.history.push(`/${item.id}`)}>
              <RepositoryItem item={item} />
            </TouchableOpacity>
          )
          }
          keyExtractor={repo => repo.id}
          ListHeaderComponent={this.renderHeader}
          onEndReached={this.props.onEndReach}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const RepositoryList = () => {
  const [repoFilter, setFilter] = useState('');
  const [textFilter, setTextFilter] = useState('');
  const [value] = useDebounce(textFilter, 200);
  const { repositories, loading, fetchMore } = useRepositories({ repoFilter: repoFilter, textFilter: value, first: 6 });

  const history = useHistory();

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      setFilter={setFilter}
      repoFilter={repoFilter}
      setTextFilter={setTextFilter}
      textFilter={textFilter}
      repositories={repositories}
      history={history}
      onEndReach={onEndReach}
      loading={loading}
    />
  );
};

export default RepositoryList;