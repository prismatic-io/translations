import { ComplexPhrase, SimplePhrase } from "../../types";

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

  /** English: "Delete API key" */
  "configWizard.triggerDetails.apiKey.confirmDelete.title": SimplePhrase;

  /** English: "Are you sure you want to delete this API key?" */
  "configWizard.triggerDetails.apiKey.confirmDelete.message": SimplePhrase;

  /** English: "Delete" */
  "configWizard.triggerDetails.apiKey.confirmDelete.submit": SimplePhrase;

  /** English: "Cancel" */
  "configWizard.triggerDetails.apiKey.confirmDelete.cancel": SimplePhrase;

  /** English: "Schedules can be ran every X minutes, hours, days, weeks or with a custom cron expression." */
  "configWizard.triggerDetails.schedule.tooltip": SimplePhrase;

  /** English: "Schedule" */
  "configWizard.triggerDetails.schedule.title": SimplePhrase;

  /** English: "Config Variable: %{value}" */
  "configWizard.triggerDetails.schedule.configVariable": ComplexPhrase<{
    value: string;
  }>;

  /** English: "Mapped field" */
  "configWizard.fieldMapping.mappedField": SimplePhrase;

  /** English: "Object" */
  "configWizard.fieldMapping.object": SimplePhrase;

  /** English: "Field" */
  "configWizard.fieldMapping.field": SimplePhrase;

  /** English: "Fields preview" */
  "configWizard.fieldMapping.fieldPreview.title": SimplePhrase;

  /** English: "%{selected} of %{totalObjects} objects selected" */
  "configWizard.objectSelection.selectedOfTotalCount": ComplexPhrase<{
    selected: number;
    totalObjects: number;
  }>;

  /** English: "Version %{selectedVersion}" */
  "configWizard.integrationDetails.selectedVersion": ComplexPhrase<{
    selectedVersion: string;
  }>;

  /** English: "Edit" */
  "configWizard.configPage.configVariableField.button.edit": SimplePhrase;

  /** English: "Code" */
  "configWizard.configPage.configVariableField.codeEditor.title": SimplePhrase;

  /** English: "Save" */
  "configWizard.configPage.configVariableField.codeEditor.save": SimplePhrase;

  /** English: "Cancel" */
  "configWizard.configPage.configVariableField.codeEditor.cancel": SimplePhrase;

  /** English: "Schedule" */
  "configWizard.configPage.configVariableField.schedule.title": SimplePhrase;

  /** English: "Close" */
  "configWizard.configPage.configVariableField.schedule.readOnly.close": SimplePhrase;

  /** English: "Save" */
  "configWizard.configPage.configVariableField.schedule.save": SimplePhrase;

  /** English: "Cancel" */
  "configWizard.configPage.configVariableField.schedule.cancel": SimplePhrase;

  /** English: "Connection" */
  "configWizard.configPage.connection.field.label": SimplePhrase;

  /** English: "Add new connection" */
  "configWizard.configPage.connection.field.addNew.label": SimplePhrase;

  /** English: "Connection logs" */
  "configWizard.configPage.connection.connectionLogs.title": SimplePhrase;

  /** English: "Use On-Prem Connection" */
  "configWizard.configPage.connection.useOnPremConnection.label": SimplePhrase;

  /** English: "Connection" */
  "configWizard.configPage.connection.connection.label": SimplePhrase;

  /** English: "Disconnect Connection" */
  "configWizard.configPage.connection.disconnect.confirmation.title": SimplePhrase;

  /** English: "Disconnecting this connection will apply to all locations where it's used. This may cause those locations to stop working as expected." */
  "configWizard.configPage.connection.disconnect.confirmation.message": SimplePhrase;

  /** English: "Connection usage" */
  "configWizard.configPage.connection.usage.label": SimplePhrase;

  /** English: "Warning" */
  "configWizard.configPage.connection.usage.warning.label": SimplePhrase;

  /** English: "Updates made to this shared connection will be applied to %{usageCount} other locations where it is used" */
  "configWizard.configPage.connection.usage.warning": ComplexPhrase<{
    usageCount: number;
  }>;

  /** English: "Name" */
  "configWizard.configPage.connection.name.label": SimplePhrase;

  /** English: "Name is required" */
  "configWizard.configPage.connection.name.requiredValidation": SimplePhrase;

  /** English: "Edit %{connectionName}" */
  "configWizard.configPage.connection.edit.title": ComplexPhrase<{
    connectionName: string;
  }>;

  /** English: "New shared connection" */
  "configWizard.configPage.connection.add.title": SimplePhrase;
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
  "configWizard.triggerDetails.apiKey.confirmDelete.cancel": "Cancel",
  "configWizard.triggerDetails.apiKey.confirmDelete.submit": "Delete",
  "configWizard.triggerDetails.apiKey.confirmDelete.message":
    "Are you sure you want to delete this API key?",
  "configWizard.triggerDetails.apiKey.confirmDelete.title": "Delete API key",
  "configWizard.triggerDetails.schedule.tooltip":
    "Schedules can be ran every X minutes, hours, days, weeks or with a custom cron expression.",
  "configWizard.triggerDetails.schedule.title": "Schedule",
  "configWizard.triggerDetails.schedule.configVariable": {
    _: "Config Variable: %{value}",
    value: "",
  },
  "configWizard.fieldMapping.mappedField": "Mapped field",
  "configWizard.fieldMapping.object": "Object",
  "configWizard.fieldMapping.field": "Field",
  "configWizard.fieldMapping.fieldPreview.title": "Fields preview",
  "configWizard.objectSelection.selectedOfTotalCount": {
    _: "%{selected} of %{totalObjects} objects selected",
    selected: 0,
    totalObjects: 0,
  },
  "configWizard.integrationDetails.selectedVersion": {
    _: "Version %{selectedVersion}",
    selectedVersion: "",
  },
  "configWizard.configPage.configVariableField.button.edit": "Edit",
  "configWizard.configPage.configVariableField.codeEditor.title": "Code",
  "configWizard.configPage.configVariableField.codeEditor.save": "Save",
  "configWizard.configPage.configVariableField.codeEditor.cancel": "Cancel",
  "configWizard.configPage.configVariableField.schedule.title": "Schedule",
  "configWizard.configPage.configVariableField.schedule.readOnly.close":
    "Close",
  "configWizard.configPage.configVariableField.schedule.save": "Save",
  "configWizard.configPage.configVariableField.schedule.cancel": "Cancel",
  "configWizard.configPage.connection.field.label": "Connection",
  "configWizard.configPage.connection.field.addNew.label": "Add new connection",
  "configWizard.configPage.connection.connectionLogs.title": "Connection logs",
  "configWizard.configPage.connection.useOnPremConnection.label":
    "Use On-Prem Connection",
  "configWizard.configPage.connection.connection.label": "Connection",
  "configWizard.configPage.connection.disconnect.confirmation.title":
    "Disconnect Connection",
  "configWizard.configPage.connection.disconnect.confirmation.message":
    "Disconnecting this connection will apply to all locations where it's used. This may cause those locations to stop working as expected.",
  "configWizard.configPage.connection.usage.label": "Connection usage",
  "configWizard.configPage.connection.usage.warning.label": "Warning",
  "configWizard.configPage.connection.usage.warning": {
    _: "Updates made to this shared connection will be applied to %{usageCount} other locations where it is used",
    usageCount: 0,
  },
  "configWizard.configPage.connection.name.label": "Name",
  "configWizard.configPage.connection.name.requiredValidation":
    "Name is required",
  "configWizard.configPage.connection.add.title": "New shared connection",
  "configWizard.configPage.connection.edit.title": {
    _: "Edit %{connectionName}",
    connectionName: "",
  },
};
