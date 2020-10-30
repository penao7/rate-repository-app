import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {

  const [mutate, result] = useMutation(CREATE_REVIEW, {
    onError: (err) => {
      alert(err.graphQLErrors[0].message);
    }
  });

  const createReview = async ({ username, repository, ratingToNumber, review }) => {

    const rating = ratingToNumber;
    const { data } = await mutate({ variables: { username, repository, rating, review } });

    if (data) {
      return data;
    }

  };

  return [createReview, result];

};

export default useCreateReview;