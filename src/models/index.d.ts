import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OportunityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StatusMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserType {
  readonly id: string;
  readonly Type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserType, UserTypeMetaData>);
  static copyOf(source: UserType, mutator: (draft: MutableModel<UserType, UserTypeMetaData>) => MutableModel<UserType, UserTypeMetaData> | void): UserType;
}

export declare class Oportunity {
  readonly id: string;
  readonly Type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Oportunity, OportunityMetaData>);
  static copyOf(source: Oportunity, mutator: (draft: MutableModel<Oportunity, OportunityMetaData>) => MutableModel<Oportunity, OportunityMetaData> | void): Oportunity;
}

export declare class Status {
  readonly id: string;
  readonly Type?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Status, StatusMetaData>);
  static copyOf(source: Status, mutator: (draft: MutableModel<Status, StatusMetaData>) => MutableModel<Status, StatusMetaData> | void): Status;
}

export declare class User {
  readonly id: string;
  readonly Name?: string | null;
  readonly CreationDate?: string | null;
  readonly Email?: string | null;
  readonly StatusId?: Status | null;
  readonly Oportunity?: Oportunity | null;
  readonly UserType?: UserType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userStatusIdId?: string | null;
  readonly userOportunityId?: string | null;
  readonly userUserTypeId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}