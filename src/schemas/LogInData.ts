import * as y from 'yup';

export const LogInDataSchema = y.object({
  email: y.string().email().required(),
  password: y.string().required(),
});

export type LogInData = y.InferType<typeof LogInDataSchema>;
