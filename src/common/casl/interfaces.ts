import { Ability } from "@casl/ability";

export type UserType = "SUPER_ADMIN" | "ADMIN" | "CLIENT";
export type Action = "manage" | "read" | "write";
export type ActionAbility = "can" | "cannot";
export type Resource = "all" | "article" | "cbi" | "user" | "admin" | "news" | "config";
export type AppAbility = Ability<[Action, Resource]>;

export interface Policy {
  id: string;
  action: Action;
  resource: Resource;
  name: string;
  actionAbility: ActionAbility;
}
