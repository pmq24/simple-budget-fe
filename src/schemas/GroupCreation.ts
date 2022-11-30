import * as y from 'yup';

export const GroupCreationSchema = y.object({
  name: y.string().required(),
  kind: y
    .string()
    .matches(/^(income|expense)$/i, 'kind must be either `income` or `expense`')
    .required(),
});

export type GroupCreation = y.InferType<typeof GroupCreationSchema>;
