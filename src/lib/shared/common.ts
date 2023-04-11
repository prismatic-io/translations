import { SimplePhrase } from "../../types";

export interface CommonPhrases {}

export interface CommonPhrases {
  /** English: "Cancel" */
  "common.cancelButton": SimplePhrase;

  /** English: "Don’t see an action you’re looking for?" */
  "common.contactUsText": SimplePhrase;

  /** English: "Contact us" */
  "common.contactUsButton": SimplePhrase;

  /** English: "Loading" */
  "common.loading": SimplePhrase;

  /** English: "Saving" */
  "common.saving": SimplePhrase;

  /** English: "Save" */
  "common.saveButton": SimplePhrase;

  /** English: "You must be authenticated." */
  "common.unauthorized": SimplePhrase;

  /** English: "This version has no publish message" */
  "common.noPublishedMessage": SimplePhrase;
}

export const commonPhrases: CommonPhrases = {
  "common.cancelButton": "Cancel",
  "common.contactUsButton": "Contact us",
  "common.contactUsText": "Don’t see an action you’re looking for?",
  "common.loading": "Loading",
  "common.noPublishedMessage": "This version has no publish message",
  "common.saveButton": "Save",
  "common.saving": "Saving",
  "common.unauthorized": "You must be authenticated.",
};
