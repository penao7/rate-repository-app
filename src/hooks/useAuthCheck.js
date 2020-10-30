import { useQuery } from '@apollo/react-hooks';
import { CHECK_AUTH } from '../graphql/queries';

const useAuthCheck = (reviews) => {

  let variables = '';

  if (reviews) {
    variables = { includeReviews: true };
  }

  const { data, loading, refetch } = useQuery(CHECK_AUTH, {
    fetchPolicy: 'network-only',
    variables: variables
  });

  return { 
    user: data ? data.authorizedUser : undefined, 
    loading,
    refetch: refetch()
  };
};

export default useAuthCheck;