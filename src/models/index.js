// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserType, Oportunity, Status, User } = initSchema(schema);

export {
  UserType,
  Oportunity,
  Status,
  User
};