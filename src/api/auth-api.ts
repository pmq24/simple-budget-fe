import { Axios } from 'axios';
import { User } from '../schemas/User';
import { UserCreation } from '../schemas/UserCreation';

export class AuthApi {
  constructor(private readonly axios: Axios) {}

  public async signUp(data: UserCreation): Promise<User> {
    return (await this.axios.post('/sign-up', data)).data;
  }
}
