import { useApolloClient } from '@apollo/react-hooks';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const useLogOut = () => {

  const client = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const logout = async () => {
    console.log('logout');
    await authStorage.removeAccessToken();
    await client.resetStore();

    console.log(authStorage.getAccessToken());
  };


  return logout;
};

export default useLogOut;