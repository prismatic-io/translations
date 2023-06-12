import { ComplexPhrase, SimplePhrase } from "../../types";

export interface DialogPhrases {
  /** English: "Remove %{removeType}" */
  "deleteDialog.confirmButton": ComplexPhrase<{ removeType: string }>;

  /** English: "does not match: %{requiredText}" */
  "deleteDialog.confirmRequiredTextValidation": ComplexPhrase<{
    requiredText: string;
  }>;

  /** English: "To confirm please type" */
  "deleteDialog.confirmText": SimplePhrase;

  /** English: "Remove %{removeType}" */
  "deleteDialog.openButton": ComplexPhrase<{ removeType: string }>;

  /** English: "Delete" */
  "deleteDialog.requiredText": SimplePhrase;

  /** English: "Are you sure?" */
  "deleteDialog.title": SimplePhrase;

  /** English: "This action cannot be undone. This will permanently delete %{requiredText} %{removalItems}." */
  "deleteDialog.warningText": ComplexPhrase<{
    requiredText: string;
    removalItems?: string;
  }>;

  /** English: "Details" */
  "webhookUrlDialog.openButton": SimplePhrase;

  /** English: "Webhook URLs" */
  "webhookUrlDialog.title": SimplePhrase;

  /** English: "Remove Integration" */
  "deleteUserConfigurationDialog.confirmButton": SimplePhrase;

  /** English: "Remove User Configuration" */
  "deleteUserConfigurationDialog.confirmButton--isAdmin": SimplePhrase;

  /** English: "Deactivate Integration" */
  "deleteUserConfigurationDialog.confirmButton--isCustomerMarketplaceUser": SimplePhrase;

  /** English: "Delete" */
  "deleteUserConfigurationDialog.openButton": SimplePhrase;

  /** English: "Are you sure?" */
  "deleteUserConfigurationDialog.title": SimplePhrase;

  /** English: "This action cannot be undone. This will permanently delete the integration." */
  "deleteUserConfigurationDialog.warningText": SimplePhrase;

  /** English: "This action cannot be undone. This will permanently delete the configuration for %{email}." */
  "deleteUserConfigurationDialog.warningText--isAdmin": ComplexPhrase<{
    email: string;
  }>;

  /** English: "User Configuration" */
  "deleteUserConfigurationDialog.options.userConfigurationButton": SimplePhrase;

  /** English: "This action cannot be undone. This will deactivate the integration." */
  "deleteUserConfigurationDialog.warningText--isCustomerMarketplaceUser": SimplePhrase;

  /** English: "This will remove all user configurations and deactivate the integration." */
  "deleteUserConfigurationDialog.warningText--hasUserConfiguration": SimplePhrase;

  /** English: "Deactivate Integration" */
  "deactivateIntegrationDialog.confirmButton": SimplePhrase;

  /** English: "Deactivate Integration" */
  "deactivateIntegrationDialog.openButton": SimplePhrase;

  /** English: "Are you sure?" */
  "deactivateIntegrationDialog.title": SimplePhrase;

  /** English: "This will deactivate this integration." */
  "deactivateIntegrationDialog.warningText": SimplePhrase;

  /** English: "Cancel" */
  "configurationWizardDialog.cancelButton": SimplePhrase;

  /** English: "Finish" */
  "configurationWizardDialog.finishButton": SimplePhrase;

  /** English: "Next" */
  "configurationWizardDialog.nextButton": SimplePhrase;

  /** English: "Previous" */
  "configurationWizardDialog.previousButton": SimplePhrase;

  /** English: "Returning to the previous page will discard unsaved changes on this page. Are you sure?" */
  "configurationWizardDialog.previousWarningText": SimplePhrase;

  /** English: "This page contains non-visible config variables that need to be set by %{organizationName} before continuing." */
  "configurationWizardDialog.missingEmbeddedConfigVariablesWarningText": ComplexPhrase<{
    organizationName: string;
  }>;

  /** English: "Cancel" */
  "apiKeyDialog.cancelButton": SimplePhrase;

  /** English: "Generate API key" */
  "apiKeyDialog.generateApiKeyButton": SimplePhrase;

  /** English: "This will remove the existing API Key." */
  "apiKeyDialog.text": SimplePhrase;

  /** English: "API key" */
  "apiKeyDialog.title": SimplePhrase;

  /** English: "Update" */
  "apiKeyDialog.updateButton": SimplePhrase;

  /** English: "Please contact %{organization} to configure this integration." */
  "activateIntegrationDialog.banner.text--isNotConfigurable": ComplexPhrase<{
    organization?: string;
  }>;

  /** English: "Add Instance" */
  "activateIntegrationDialog.addButton": SimplePhrase;

  /** English: "Cancel" */
  "activateIntegrationDialog.cancelButton": SimplePhrase;

  /** English: "Configure" */
  "activateIntegrationDialog.configureButton": SimplePhrase;

  /** English: "Instances" */
  "activateIntegrationDialog.instancesTitle": SimplePhrase;

  /** English: "View an existing instance, or create a new one." */
  "activateIntegrationDialog.instancesText": SimplePhrase;

  /** English: "View" */
  "activateIntegrationDialog.viewButton": SimplePhrase;

  /** English: "Contact organization to configure this integration" */
  "activateIntegrationDialog.marketplaceConfigurationError": SimplePhrase;

  /** English: "View configuration" */
  "activateIntegrationDialog.viewConfiguration": SimplePhrase;

  /** English: "View details" */
  "activateIntegrationDialog.viewDetails": SimplePhrase;

  /** English: "Pause integration" */
  "activateIntegrationDialog.pauseIntegration": SimplePhrase;

  /** English: "Unpause integration" */
  "activateIntegrationDialog.unpauseIntegration": SimplePhrase;

  /** English: "Create user configuration" */
  "activateIntegrationDialog.createUserConfiguration": SimplePhrase;

  /** English: "Edit user configuration" */
  "activateIntegrationDialog.editUserConfiguration": SimplePhrase;

  /** English: "View user configuration" */
  "activateIntegrationDialog.viewUserConfiguration": SimplePhrase;

  /** English: "Delete user configuration" */
  "activateIntegrationDialog.deleteUserConfiguration": SimplePhrase;
}

export const dialogPhrases: DialogPhrases = {
  // delete dialog
  "deleteDialog.confirmButton": { _: "Remove %{removeType}", removeType: "" },
  "deleteDialog.confirmRequiredTextValidation": {
    _: "does not match: %{requiredText}",
    requiredText: "Delete",
  },
  "deleteDialog.confirmText": "To confirm please type",
  "deleteDialog.openButton": { _: "Remove %{removeType}", removeType: "" },
  "deleteDialog.requiredText": "Delete",
  "deleteDialog.title": "Are you sure?",
  "deleteDialog.warningText": {
    _: "This action cannot be undone. This will permanently delete %{requiredText} %{removalItems}.",
    requiredText: "",
    removalItems: undefined,
  },

  // web hook dialog
  "webhookUrlDialog.title": "Webhook URLs",
  "webhookUrlDialog.openButton": "Details",

  // activate integration dialog
  "activateIntegrationDialog.addButton": "Add Instance",
  "activateIntegrationDialog.banner.text--isNotConfigurable": {
    _: "Please contact %{organization} to configure this integration.",
    organization: "your organization",
  },
  "activateIntegrationDialog.cancelButton": "Cancel",
  "activateIntegrationDialog.configureButton": "Configure",
  "activateIntegrationDialog.instancesText":
    "View an existing instance, or create a new one.",
  "activateIntegrationDialog.instancesTitle": "Instances",
  "activateIntegrationDialog.marketplaceConfigurationError":
    "Contact organization to configure this integration",
  "activateIntegrationDialog.viewButton": "View",
  "activateIntegrationDialog.viewConfiguration": "View configuration",
  "activateIntegrationDialog.viewDetails": "View details",
  "activateIntegrationDialog.pauseIntegration": "Pause integration",
  "activateIntegrationDialog.unpauseIntegration": "Unpause integration",
  "activateIntegrationDialog.createUserConfiguration":
    "Create user configuration",
  "activateIntegrationDialog.editUserConfiguration": "Edit user configuration",
  "activateIntegrationDialog.viewUserConfiguration": "View user configuration",
  "activateIntegrationDialog.deleteUserConfiguration":
    "Delete user configuration",

  // delete user configuration dialog
  "deleteUserConfigurationDialog.confirmButton": "Remove Integration",
  "deleteUserConfigurationDialog.confirmButton--isAdmin":
    "Remove User Configuration",
  "deleteUserConfigurationDialog.openButton": "Delete",
  "deleteUserConfigurationDialog.title": "Are you sure?",
  "deleteUserConfigurationDialog.warningText":
    "This action cannot be undone. This will permanently delete the integration.",
  "deleteUserConfigurationDialog.warningText--isAdmin": {
    _: "This action cannot be undone. This will permanently delete the configuration for %{email}.",
    email: "",
  },
  "deleteUserConfigurationDialog.confirmButton--isCustomerMarketplaceUser":
    "Deactivate Integration",
  "deleteUserConfigurationDialog.options.userConfigurationButton":
    "User Configuration",
  "deleteUserConfigurationDialog.warningText--isCustomerMarketplaceUser":
    "This action cannot be undone. This will deactivate the integration.",
  "deleteUserConfigurationDialog.warningText--hasUserConfiguration":
    "This will remove all user configurations and deactivate the integration.",

  // deactivate integration dialog
  "deactivateIntegrationDialog.openButton": "Deactivate Integration",
  "deactivateIntegrationDialog.confirmButton": "Deactivate Integration",
  "deactivateIntegrationDialog.title": "Are you sure?",
  "deactivateIntegrationDialog.warningText":
    "This will deactivate this integration.",

  // confirmation wizard dialog
  "configurationWizardDialog.cancelButton": "Cancel",
  "configurationWizardDialog.finishButton": "Finish",
  "configurationWizardDialog.nextButton": "Next",
  "configurationWizardDialog.previousButton": "Previous",
  "configurationWizardDialog.previousWarningText":
    "Returning to the previous page will discard unsaved changes on this page. Are you sure?",
  "configurationWizardDialog.missingEmbeddedConfigVariablesWarningText": {
    _: "This page contains non-visible config variables that need to be set by %{organizationName} before continuing.",
    organizationName: "the organization",
  },

  // api key dialog
  "apiKeyDialog.cancelButton": "Cancel",
  "apiKeyDialog.generateApiKeyButton": "Generate API key",
  "apiKeyDialog.text": "This will remove the existing API Key.",
  "apiKeyDialog.title": "API key",
  "apiKeyDialog.updateButton": "Update",
};
