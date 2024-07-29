import { SimplePhrase } from "../../types";

export interface ConfigWizardPhrases {
  /** English: "This configuration page has no configuration." */
  "configWizard.noConfigurationText": SimplePhrase;

  /** English: "By connecting the connection, you will no longer have access to the replaced value. Would you like to continue with the new value? This action cannot be undone." */
  "configWizard.connect.confirmValueReplacement": SimplePhrase;

  /** English: "By saving this page, you will no longer have access to the replaced value. Would you like to continue with the new value? This action cannot be undone." */
  "configWizard.submit.confirmValueReplacement": SimplePhrase;

  /** English: "Cancel" */
  "configWizard.confirmValueReplacement.cancel": SimplePhrase;

  /** English: "Yes, continue" */
  "configWizard.confirmValueReplacement.confirm": SimplePhrase;

  /** English: "Are you sure?" */
  "configWizard.confirmValueReplacement.title": SimplePhrase;
}

export const configWizardPhrases: ConfigWizardPhrases = {
  "configWizard.noConfigurationText":
    "This configuration page has no configuration.",
  "configWizard.connect.confirmValueReplacement":
    "By connecting the connection, you will no longer have access to the replaced value. Would you like to continue with the new value? This action cannot be undone.",
  "configWizard.submit.confirmValueReplacement":
    "By saving this page, you will no longer have access to the replaced value. Would you like to continue with the new value? This action cannot be undone.",
  "configWizard.confirmValueReplacement.cancel": "Cancel",
  "configWizard.confirmValueReplacement.confirm": "Yes, continue",
  "configWizard.confirmValueReplacement.title": "Are you sure?",
};
