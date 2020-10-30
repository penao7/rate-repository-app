import React from 'react';
import { FlatList, StyleSheet, View, Linking } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORY } from '../../graphql/queries';
import RepositoryItem from '../RepositoryList/RepositoryItem';
import Loading from '../Loading';
import ReviewItem from './ReviewItem';
import Button from '../Button';
import Text from '../Text';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'lightgrey'
  },
  separatorHeader: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingBottom: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {

  const { repoId } = useParams();

  const variables = { id: repoId, first: 6 };

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORY,
    {
      variables: variables,
      fetchPolicy: 'cache-and-network'
    });

  const repository = (data && data.repository) ? data.repository : undefined;

  const reviewNodes = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        console.log('fetchmore', fetchMoreResult);
        console.log('prev', previousResult);
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [
                ...previousResult.repository.reviews.edges,
                ...fetchMoreResult.repository.reviews.edges,
              ],
            },
          }
        };

        return nextResult;
      },
    });
  };


  const renderFooter = () => {
    if (!loading) {
      return null;
    }

    return (
      <Loading />
    );
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        (data && data.repository) ?
          <View style={styles.separatorHeader}>
            <RepositoryItem item={data.repository} />
            <Button color='primary' onPress={() => Linking.openURL(data.repository.url)} title="Open"></Button>
          </View>
          : <Text></Text>
      )
      }
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    >
    </FlatList >
  );
};

export default SingleRepository;