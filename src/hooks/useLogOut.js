import { useApolloClient } from '@apollo/react-hooks';
import { useContext } from 'react';
import { useHistory } from 'react-router-native';
import AuthStorageContext from '../contexts/AuthStorageContext';


const useLogOut = () => {

  const client = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const history = useHistory();

  const logout = async () => {
    await authStorage.removeAccessToken();
    await client.resetStore();
    history.push('/');
  };

  return logout;
};

export default useLogOut;