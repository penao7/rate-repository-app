import { useMutation } from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../graphql/mutations';
import { Alert } from 'react-native';

const useDeleteReview = () => {

  const [mutate, result] = useMutation(DELETE_REVIEW, {
    onError: (err) => {
      alert(err.graphQLErrors[0].message);
    }
  });

  const deleteReview = async (id) => {

    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            const { data } = await mutate({ variables: { id } });
            if (data) {
              return data.deleteReview;
            }
          }
        }
      ],
      { cancelable: false }
    );

  };

  return [deleteReview, result];

};

export default useDeleteReview;