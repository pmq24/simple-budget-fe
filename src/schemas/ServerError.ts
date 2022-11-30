import { AxiosError } from 'axios';

export default class ServerError extends Error {
  public constructor(originalError: unknown) {
    if (
      !(originalError instanceof AxiosError) ||
      originalError.code === '500' ||
      !originalError?.response?.data
    ) {
      super(
        'Oh no! Aliens has invaded The Earth and destroyed our servers! :('
      );
    } else {
      super(originalError.response.data.message);
    }
  }
}
