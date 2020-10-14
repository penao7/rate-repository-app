import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {

  const [mutate, result] = useMutation(SIGN_IN, {
    onError: (err) => {
      console.log(err);
    }
  });

  const authStorage = useContext(AuthStorageContext);
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });

    if (data) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      await client.resetStore();

      return data;
    }

  };

  return [signIn, result];

};

export default useSignIn;