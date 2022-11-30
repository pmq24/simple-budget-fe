import { Axios } from 'axios';
import { LogInData } from '../schemas/LogInData';
import ServerError from '../schemas/ServerError';
import { ServerResponse } from '../schemas/ServerResponse';
import { User } from '../schemas/User';
import { UserCreation } from '../schemas/UserCreation';

export class AuthApi {
  constructor(private readonly axios: Axios) {}

  public async signUp(data: UserCreation): Promise<User> {
    return (await this.axios.post('/sign-up', data)).data;
  }

  public async logIn(data: LogInData): Promise<ServerResponse<User>> {
    try {
      return (await this.axios.post('/log-in', data)).data;
    } catch (err) {
      throw new ServerError(err);
    }
  }
}
