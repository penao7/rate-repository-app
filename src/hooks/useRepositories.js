import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ repoFilter, textFilter, first }) => {

  let variables = { first: first };

  if (repoFilter !== '' && textFilter !== '') {
    variables = { ...variables, orderBy: repoFilter, searchKeyword: textFilter };
  }

  if (textFilter !== '' && repoFilter === '') {
    variables = { ...variables, searchKeyword: textFilter };
  }

  if (repoFilter !== '' && textFilter === '') {
    variables = { ...variables, orderBy: repoFilter };
  }

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    onError: () => {
      console.log(error);
    },
    variables: variables
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result
  };

};

export default useRepositories;