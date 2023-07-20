import { SimplePhrase } from "../../types";

export interface UserPhrases {
  /** English: "Admin" */
  "user.adminRole": SimplePhrase;

  /** English: "Customer Manager" */
  "user.customerManagerRole": SimplePhrase;

  /** English: "Owner" */
  "user.ownerRole": SimplePhrase;

  /** English: "Guest" */
  "user.guestRole": SimplePhrase;

  /** English: "Member" */
  "user.memberRole": SimplePhrase;

  /** English: "Integrator" */
  "user.integratorRole": SimplePhrase;

  /** English: "Marketplace" */
  "user.marketplaceRole": SimplePhrase;

  /** English: "Marketplace User" */
  "user.marketplaceUserRole": SimplePhrase;

  /** English: "Third-Party" */
  "user.thirdPartyRole": SimplePhrase;
}

export const userPhrases: UserPhrases = {
  "user.adminRole": "Admin",
  "user.customerManagerRole": "Customer Manager",
  "user.guestRole": "Guest",
  "user.integratorRole": "Integrator",
  "user.marketplaceRole": "Marketplace",
  "user.marketplaceUserRole": "Marketplace User",
  "user.memberRole": "Member",
  "user.ownerRole": "Owner",
  "user.thirdPartyRole": "Third-Party",
};
