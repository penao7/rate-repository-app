import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from '../graphql/mutations';

const useSignIn = () => {

  const [mutate, result] = useMutation(SIGN_UP, {
    onError: (err) => {
      alert(err.graphQLErrors[0].message);
    }
  });

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });

    if (data) {
      return data;
    }

  };

  return [signUp, result];

};

export default useSignIn;