export type ServerResponse<T = undefined> = {
  message: string;
  data: T;
};
