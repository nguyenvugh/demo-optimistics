import { AppAbility, Policy, UserType } from "./interfaces";
import { ability } from "./Abilitites";
import { Ability, AbilityBuilder } from "@casl/ability";

export function updateAbility(abilities: typeof ability, policies: Policy[], userType: UserType) {
  const { can, rules } = new AbilityBuilder<AppAbility>(Ability);
  if (userType === "SUPER_ADMIN") {
    can("manage", "all");
  } else if (userType === "ADMIN") {
    policies.forEach((policy) => {
      can(policy.action, policy.resource);
    });
  }
  abilities.update(rules);
}
