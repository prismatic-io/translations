import { ComplexPhrase, SimplePhrase } from "../../types";

export interface InputPhrases {
  /** English: "Monitor" */
  "input.alertMonitorLabel": SimplePhrase;

  /** English: "Alert Trigger" */
  "input.alertTriggerLabel": SimplePhrase;

  /** English: "Add API key" */
  "input.apiKeyAddButton": SimplePhrase;

  /** English: "API Key" */
  "input.apiKeyLabel": SimplePhrase;

  /** English: "No API key configured" */
  "input.apiKeyPlaceholder": SimplePhrase;

  /** English: "Category" */
  "input.categoryLabel": SimplePhrase;

  /** English: "Edit" */
  "input.codePlaceholder": SimplePhrase;

  /** English: "Comment" */
  "input.commentLabel": SimplePhrase;

  /** English: "Confirmation text" */
  "input.confirmRequiredTextLabel": SimplePhrase;

  /** English: "Content type" */
  "input.contentTypeLabel": SimplePhrase;

  /** English: "Customer" */
  "input.customerLabel": SimplePhrase;

  /** English: "There was an error" */
  "input.dateError": SimplePhrase;

  /** English: "There was an error" */
  "input.dateTimeError": SimplePhrase;

  /** English: "Description" */
  "input.descriptionLabel": SimplePhrase;

  /** English: "Default Value" */
  "input.defaultValueLabel": SimplePhrase;

  /** English: "Email" */
  "input.emailLabel": SimplePhrase;

  /** English: "End Date/Time" */
  "input.endDateHelperText": SimplePhrase;

  /** English: "End Date/Time" */
  "input.endDateLabel": SimplePhrase;

  /** English: "External ID" */
  "input.externalIdLabel": SimplePhrase;

  /** English: "Show only failed preprocess flows" */
  "input.failedPreprocessFlowsOnlyLabel": SimplePhrase;

  /** English: "Search %{type}" */
  "input.filterSearchPlaceholder": ComplexPhrase<{ type?: string }>;

  /** English: "Has outdated components" */
  "input.hasOutdatedComponentsLabel": SimplePhrase;

  /** English: "Add header" */
  "input.headersAddButton": SimplePhrase;

  /** English: "Key" */
  "input.headersKeyLabel": SimplePhrase;

  /** English: "Headers" */
  "input.headersLabel": SimplePhrase;

  /** English: "Value" */
  "input.headersValueLabel": SimplePhrase;

  /** English: "Include customer components" */
  "input.includeCustomerComponentsLabel": SimplePhrase;

  /** English: "Include customer integrations" */
  "input.includeCustomerIntegrationsLabel": SimplePhrase;

  /** English: "Instance" */
  "input.instanceLabel": SimplePhrase;

  /** English: "Integration" */
  "input.integrationLabel": SimplePhrase;

  /** English: "Integration Version" */
  "input.integrationVersionLabel": SimplePhrase;

  /** English: "Designer Version" */
  "input.integrationVersionLatestLabel": SimplePhrase;

  /** English: "Labels" */
  "input.labelsLabel": SimplePhrase;

  /** English: "Key" */
  "input.keyLabel": SimplePhrase;

  /** English: "Key" */
  "input.keyPlaceholder": SimplePhrase;

  /** English: "Designer Version" */
  "input.latestVersionLabel": SimplePhrase;

  /** English: "Log Severity" */
  "input.logSeverityLabel": SimplePhrase;

  /** English: "Connection Only" */
  "input.logType.integrationConnectionValue": SimplePhrase;

  /** English: "Execution & Connection" */
  "input.logType.integrationExecutionAndConnectionValue": SimplePhrase;

  /** English: "Execution only" */
  "input.logType.integrationExecutionValue": SimplePhrase;

  /** English: "Log Type" */
  "input.logTypeLabel": SimplePhrase;

  /** English: "Marketplace Version" */
  "input.marketplaceVersionLabel": SimplePhrase;

  /** English: "No options found" */
  "input.noOptionsValue": SimplePhrase;

  /** English: "None" */
  "input.noneValue": SimplePhrase;

  /** English: "Edit" */
  "input.objectFieldMapPlaceholder": SimplePhrase;

  /** English: "Show original executions only" */
  "input.originalOnlyLabel": SimplePhrase;

  /** English: "Payload body" */
  "input.payloadBodyLabel": SimplePhrase;

  /** English: "Post URL" */
  "input.postUrlLabel": SimplePhrase;

  /** English: "Role" */
  "input.roleLabel": SimplePhrase;

  /** English: "Flow Selector" */
  "input.selectFlowLabel": SimplePhrase;

  /** English: "Log severity" */
  "input.severityLabel": SimplePhrase;

  /** English: "Start Date/Time" */
  "input.startDateLabel": SimplePhrase;

  /** English: "Show only private components" */
  "input.showOnlyPrivateComponentsLabel": SimplePhrase;

  /** English: "Show only templates" */
  "input.showOnlyTemplatesLabel": SimplePhrase;

  /** English: "All" */
  "input.status.allValue": SimplePhrase;

  /** English: "Enabled" */
  "input.status.enabledValue": SimplePhrase;

  /** English: "Disabled" */
  "input.status.disabledValue": SimplePhrase;

  /** English: "Failed" */
  "input.status.failedValue": SimplePhrase;

  /** English: "Running" */
  "input.status.runningValue": SimplePhrase;

  /** English: "Successful" */
  "input.status.successfulValue": SimplePhrase;

  /** English: "Status" */
  "input.statusLabel": SimplePhrase;

  /** English: "Step" */
  "input.stepLabel": SimplePhrase;

  /** English: "URL" */
  "input.urlLabel": SimplePhrase;

  /** English: "Value" */
  "input.valueLabel": SimplePhrase;

  /** English: "Add a value" */
  "input.valuePlaceholder": SimplePhrase;

  /** English: "Add value" */
  "input.valueAddButton": SimplePhrase;
}

export const inputPhrases: InputPhrases = {
  "input.alertMonitorLabel": "Monitor",
  "input.alertTriggerLabel": "Alert Trigger",
  "input.apiKeyAddButton": "Add API key",
  "input.apiKeyLabel": "API key",
  "input.apiKeyPlaceholder": "No API key configured",
  "input.categoryLabel": "Category",
  "input.codePlaceholder": "Edit",
  "input.commentLabel": "Comment",
  "input.confirmRequiredTextLabel": "Confirmation text",
  "input.contentTypeLabel": "Content type",
  "input.customerLabel": "Customer",
  "input.dateError": "There was an error",
  "input.dateTimeError": "There was an error",
  "input.defaultValueLabel": "Default Value",
  "input.descriptionLabel": "Description",
  "input.emailLabel": "Email",
  "input.endDateHelperText": "* Maximum filter range is 24 hours",
  "input.endDateLabel": "End Date/Time",
  "input.externalIdLabel": "External ID",
  "input.failedPreprocessFlowsOnlyLabel": "Show only failed preprocess flows",
  "input.filterSearchPlaceholder": { _: "Search %{type}", type: "" },
  "input.hasOutdatedComponentsLabel": "Has outdated components",
  "input.headersAddButton": "Add header",
  "input.headersKeyLabel": "Key",
  "input.headersLabel": "Headers",
  "input.headersValueLabel": "Value",
  "input.includeCustomerComponentsLabel": "Include customer components",
  "input.includeCustomerIntegrationsLabel": "Include customer integrations",
  "input.instanceLabel": "Instance",
  "input.integrationLabel": "Integration",
  "input.integrationVersionLabel": "Integration Version",
  "input.integrationVersionLatestLabel": "Designer Version",
  "input.keyLabel": "Key",
  "input.keyPlaceholder": "Key",
  "input.labelsLabel": "Labels",
  "input.latestVersionLabel": "Designer Version",
  "input.logSeverityLabel": "Log Severity",
  "input.logType.integrationConnectionValue": "Connection Only",
  "input.logType.integrationExecutionAndConnectionValue":
    "Execution & Connection",
  "input.logType.integrationExecutionValue": "Execution Only",
  "input.logTypeLabel": "Log type",
  "input.marketplaceVersionLabel": "Marketplace Version",
  "input.noOptionsValue": "No options found",
  "input.noneValue": "None",
  "input.objectFieldMapPlaceholder": "Edit",
  "input.originalOnlyLabel": "Show original executions only",
  "input.payloadBodyLabel": "Payload body",
  "input.postUrlLabel": "Post URL",
  "input.roleLabel": "Role",
  "input.selectFlowLabel": "Flow Selector",
  "input.severityLabel": "Log severity",
  "input.showOnlyPrivateComponentsLabel": "Show only private components",
  "input.showOnlyTemplatesLabel": "Show only templates",
  "input.startDateLabel": "Start Date/Time",
  "input.status.allValue": "All",
  "input.status.disabledValue": "Disabled",
  "input.status.enabledValue": "Enabled",
  "input.status.failedValue": "Failed",
  "input.status.runningValue": "Running",
  "input.status.successfulValue": "Successful",
  "input.statusLabel": "Status",
  "input.stepLabel": "Step",
  "input.urlLabel": "URL",
  "input.valueAddButton": "Add value",
  "input.valueLabel": "Value",
  "input.valuePlaceholder": "Add a value",
};
