import axios, { Axios } from 'axios';
import { AuthApi } from './auth-api';
import GroupsApi from './groups-api';

export default class Api {
  public constructor() {
    const configuredAxios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });

    this.axios = configuredAxios;
    this.auth = new AuthApi(this.axios);
    this.groups = new GroupsApi(this.axios);
  }

  private axios: Axios;
  public readonly auth: AuthApi;
  public readonly groups: GroupsApi;
}
