import * as y from 'yup';

export const UserCreationSchema = y.object({
  email: y.string().email().required(),
  password: y.string().required(),
  confirmPassword: y
    .string()
    .oneOf([y.ref('password'), null], 'Passwords must match'),
});

export type UserCreation = y.InferType<typeof UserCreationSchema>;
