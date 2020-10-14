import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'Auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const rawToken = await AsyncStorage.getItem(
      `${this.namespace}:rateAppUser`
    );

    return rawToken ? JSON.parse(rawToken) : '';
  }

  async setAccessToken(token) {
    await AsyncStorage.setItem(
      `${this.namespace}:rateAppUser`,
      JSON.stringify(token)
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:rateAppUser`);
  }
}

export default AuthStorage;