import React from 'react';
import useAuthCheck from '../../hooks/useAuthCheck';
import { FlatList, View, StyleSheet } from 'react-native';
import ReviewItem from '../SingleRepository/ReviewItem';
import Loading from '../Loading';
import Button from '../Button';
import { useHistory } from 'react-router-native';
import useDeleteReview from '../../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  separator: {
    height: 1,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'lightgrey'
  },
  separatorHeader: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {

  const { user, loading, refetch } = useAuthCheck(true);
  const history = useHistory();

  const [deleteReview] = useDeleteReview();

  const reviewNodes = user
    ? user.reviews.edges.map(edge => {
      return { ...edge.node, user: { ...edge.node.user, username: edge.node.repository.fullName } };
    })
    : [];

  if (loading || !user) {
    return <Loading />;
  }

  const handleDeleteReview = (id) => {
    if (deleteReview(id)) {
      refetch;
    }
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => {
        if (item && item.repository) {

          return (
            <View>
              <ReviewItem review={item} />
              <View style={styles.container}>
                <Button onPress={() => history.push(`/${item.repository.id}`)} color='primary' title='View'></Button>
                <Button onPress={() => handleDeleteReview(item.id)} color='danger' title='Delete'></Button>
              </View>
            </View>
          );
        }
      }
      }
      keyExtractor={({ id }) => id}
    // onEndReached={handleFetchMore}
    // onEndReachedThreshold={0.5}
    // ListFooterComponent={renderFooter}
    >
    </FlatList >
  );
};

export default MyReviews;