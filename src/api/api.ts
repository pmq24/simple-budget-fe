import axios, { Axios } from 'axios';
import { AuthApi } from './auth-api';
import env from 'react-dotenv';

export default class Api {
  public constructor() {
    const configuredAxios = axios.create({
      baseURL: env.API_URL,
    });

    this.axios = configuredAxios;
    this.auth = new AuthApi(this.axios);
  }

  private axios: Axios;
  public readonly auth: AuthApi;
}
