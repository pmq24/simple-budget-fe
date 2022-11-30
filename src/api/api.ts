import axios, { Axios } from 'axios';
import { AuthApi } from './auth-api';

export default class Api {
  public constructor() {
    const configuredAxios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.axios = configuredAxios;
    this.auth = new AuthApi(this.axios);
  }

  private axios: Axios;
  public readonly auth: AuthApi;
}
