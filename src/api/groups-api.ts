import { Axios } from 'axios';
import { Group } from '../schemas/Group';
import { GroupCreation } from '../schemas/GroupCreation';
import { ServerResponse } from '../schemas/ServerResponse';

export default class GroupsApi {
  public constructor(private readonly axios: Axios) {}

  public async create(data: GroupCreation): Promise<ServerResponse<Group>> {
    return (await this.axios.post('/groups')).data;
  }

  public async getAll(): Promise<ServerResponse<Group[]>> {
    return (await this.axios.get('/groups')).data;
  }
}
