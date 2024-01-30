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

  /** English: "Load more" */
  "common.loadMore": SimplePhrase;

  /** English: "Saving" */
  "common.saving": SimplePhrase;

  /** English: "Save" */
  "common.saveButton": SimplePhrase;

  /** English: "You must be authenticated." */
  "common.unauthorized": SimplePhrase;

  /** English: "This version has no publish message" */
  "common.noPublishedMessage": SimplePhrase;

  /** English: "Disabled" */
  "common.disabledStatus": SimplePhrase;

  /** English: "Enabled" */
  "common.enabledStatus": SimplePhrase;

  /** English: "Not Enabled" */
  "common.notEnabledStatus": SimplePhrase;

  /** English: "Help" */
  "common.helpButton": SimplePhrase;
}

export const commonPhrases: CommonPhrases = {
  "common.cancelButton": "Cancel",
  "common.contactUsButton": "Contact us",
  "common.contactUsText": "Don’t see an action you’re looking for?",
  "common.loading": "Loading",
  "common.loadMore": "Load more",
  "common.noPublishedMessage": "This version has no publish message",
  "common.saveButton": "Save",
  "common.saving": "Saving",
  "common.unauthorized": "You must be authenticated.",
  "common.disabledStatus": "Disabled",
  "common.enabledStatus": "Enabled",
  "common.notEnabledStatus": "Not Enabled",
  "common.helpButton": "Help",
};
