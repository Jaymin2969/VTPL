import axios from 'axios';
import { appConfig } from '../config/app';
import TokenManager from './TokenManager';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const APP_PLATFORM = 'Mobile';

export const request = axios.create({
  headers: {
    app_platform: APP_PLATFORM,
    app_version: 1,
  },
});

async function getToken() {
  return TokenManager.retrieveToken();
}

export function removeToken() {
  delete request.defaults.headers.Authorization;
}

export async function setupHttpConfig(tokenArg, baseURL) {
  // await TokenManager.deleteToken();
  request.defaults.baseURL = baseURL || appConfig.baseAPI;
  // request.defaults.timeout = appConfig.defaultTimeout;
  axios.defaults.headers['Content-Type'] = 'application/json';
  const token = await getToken();
  if (token) {
    request.defaults.headers.Authorization = `Bearer ${token || tokenArg}`;
  }
}


export const isLoginCheck = () => {
  const navigation = useNavigation()
  useFocusEffect(
    async () => {
      const retrieveToken = await TokenManager.retrieveToken()
      if (!retrieveToken) return navigation.navigate('ActiveStack')
    }
  );
}