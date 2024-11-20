import { ComplexPhrase, SimplePhrase } from "../../types";

export interface InputPhrases {
  /** English: "Monitor" */
  "input.alertMonitorLabel": SimplePhrase;

  /** English: "Alert trigger" */
  "input.alertTriggerLabel": SimplePhrase;

  /** English: "Allow embedded designer" */
  "input.allowEmbeddedDesignerLabel": SimplePhrase;

  /** English: "Allow multiple instances" */
  "input.allowMultipleInstancesLabel": SimplePhrase;

  /** English: "Add API key" */
  "input.apiKeyAddButton": SimplePhrase;

  /** English: "API key" */
  "input.apiKeyLabel": SimplePhrase;

  /** English: "No API key configured" */
  "input.apiKeyPlaceholder": SimplePhrase;

  /** English: "Category" */
  "input.categoryLabel": SimplePhrase;

  /** English: "Category can only be updated in the %{integrationSingularLower} details." */
  "input.categoryDisabledHelper.integration":
    | ComplexPhrase<{
        integrationSingularLower: string;
      }>
    | SimplePhrase;

  /** English: "Edit" */
  "input.codePlaceholder": SimplePhrase;

  /** English: "Comment" */
  "input.commentLabel": SimplePhrase;

  /** English: "Confirmation text" */
  "input.confirmRequiredTextLabel": SimplePhrase;

  /** English: "Content type" */
  "input.contentTypeLabel": SimplePhrase;

  /** English: "Customer deployable" */
  "input.customerDeployableLabel": SimplePhrase;

  /** English: "Customer" */
  "input.customerLabel": SimplePhrase;

  /** English: "There was an error" */
  "input.dateError": SimplePhrase;

  /** English: "There was an error" */
  "input.dateTimeError": SimplePhrase;

  /** English: "Description" */
  "input.descriptionLabel": SimplePhrase;

  /** English: "Description can only be updated in the %{integrationSingularLower} details." */
  "input.descriptionDisabledHelper.integration":
    | ComplexPhrase<{
        integrationSingularLower: string;
      }>
    | SimplePhrase;

  /** English: "Default value" */
  "input.defaultValueLabel": SimplePhrase;

  /** English: "Disable logs" */
  "input.disableLogsLabel": SimplePhrase;

  /** English: "Disable step outputs" */
  "input.disableStepOutputsLabel": SimplePhrase;

  /** English: "Email" */
  "input.emailLabel": SimplePhrase;

  /** English: "End date/time" */
  "input.endDateHelperText": ComplexPhrase<{ hours: number }>;

  /** English: "End date/time" */
  "input.endDateLabel": SimplePhrase;

  /** English: "External ID" */
  "input.externalIdLabel": SimplePhrase;

  /** English: "Show only failed preprocess flows" */
  "input.failedPreprocessFlowsOnlyLabel": SimplePhrase;

  /** English: "Search %{type}" */
  "input.filterSearchPlaceholder": ComplexPhrase<{
    type?: string;
    integrationPluralLower?: string;
  }>;

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

  /** English: "Include customer %{integrationPluralLower}" */
  "input.includeCustomerIntegrationsLabel":
    | ComplexPhrase<{
        integrationPluralLower: string;
      }>
    | SimplePhrase;

  /** English: "Instance" */
  "input.instanceLabel": SimplePhrase;

  /** English: "%{integrationSingular}" */
  "input.integrationLabel":
    | ComplexPhrase<{
        integrationSingular: string;
      }>
    | SimplePhrase;

  /** English: "%{integrationSingular} version" */
  "input.integrationVersionLabel":
    | ComplexPhrase<{
        integrationSingular: string;
      }>
    | SimplePhrase;

  /** English: "Designer version" */
  "input.integrationVersionLatestLabel": SimplePhrase;

  /** English: "Labels" */
  "input.labelsLabel": SimplePhrase;

  /** English: "Key" */
  "input.keyLabel": SimplePhrase;

  /** English: "Key" */
  "input.keyPlaceholder": SimplePhrase;

  /** English: "Designer version" */
  "input.latestVersionLabel": SimplePhrase;

  /** English: "Log severity" */
  "input.logSeverityLabel": SimplePhrase;

  /** English: "Connection Only" */
  "input.logType.integrationConnectionValue": SimplePhrase;

  /** English: "Execution & Connection" */
  "input.logType.integrationExecutionAndConnectionValue": SimplePhrase;

  /** English: "Execution only" */
  "input.logType.integrationExecutionValue": SimplePhrase;

  /** English: "Log type" */
  "input.logTypeLabel": SimplePhrase;

  /** English: "%{marketplaceSingular} version" */
  "input.marketplaceVersionLabel": ComplexPhrase<{
    marketplaceSingular?: string;
  }>;

  /** English: "Name" */
  "input.nameLabel": SimplePhrase;

  /** English: "Name can only be updated in the %{integrationSingularLower} details." */
  "input.nameDisabledHelper.integration":
    | ComplexPhrase<{
        integrationSingularLower: string;
      }>
    | SimplePhrase;

  /** English: "No options found" */
  "input.noOptionsValue": SimplePhrase;

  /** English: "None" */
  "input.noneValue": SimplePhrase;

  /** English: "Edit" */
  "input.objectFieldMapPlaceholder": SimplePhrase;

  /** English: "Show original executions only" */
  "input.originalOnlyLabel": SimplePhrase;

  /** English: "Exclude executions without trigger-detected changes" */
  "input.excludePolledNoChanges": SimplePhrase;

  /** English: "Payload body" */
  "input.payloadBodyLabel": SimplePhrase;

  /** English: "Post URL" */
  "input.postUrlLabel": SimplePhrase;

  /** English: "Prevent customer deployment" */
  "input.preventCustomerDeploymentLabel": SimplePhrase;

  /** English: "Role" */
  "input.roleLabel": SimplePhrase;

  /** English: "Flow selector" */
  "input.selectFlowLabel": SimplePhrase;

  /** English: "Log severity" */
  "input.severityLabel": SimplePhrase;

  /** English: "Start date/time" */
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

  /** English: "Cleared" */
  "input.status.clearedValue": SimplePhrase;

  /** English: "Uncleared" */
  "input.status.unclearedValue": SimplePhrase;

  /** English: "Status" */
  "input.statusLabel": SimplePhrase;

  /** English: "Step" */
  "input.stepLabel": SimplePhrase;

  /** English: "Hours" */
  "input.timeMeasurement.hoursValue": SimplePhrase;

  /** English: "Minutes" */
  "input.timeMeasurement.minutesValue": SimplePhrase;

  /** English: "Seconds" */
  "input.timeMeasurement.secondsValue": SimplePhrase;

  /** English: "Time range" */
  "input.timeRangeLabel": SimplePhrase;

  /** English: "Past 15 Minutes" */
  "input.timeRange.past15MinutesValue": SimplePhrase;

  /** English: "Past Hour" */
  "input.timeRange.pastHourValue": SimplePhrase;

  /** English: "Past 24 Hours" */
  "input.timeRange.past24HoursValue": SimplePhrase;

  /** English: "Custom" */
  "input.timeRange.customValue": SimplePhrase;

  /** English: "Surrounding" */
  "input.timeRangeRange.surroundingValue": SimplePhrase;

  /** English: "After" */
  "input.timeRangeRange.afterValue": SimplePhrase;

  /** English: "Before" */
  "input.timeRangeRange.beforeValue": SimplePhrase;

  /** English: "Trigger" */
  "input.triggerLabel": SimplePhrase;

  /** English: "URL" */
  "input.urlLabel": SimplePhrase;

  /** English: "Upload a photo" */
  "input.uploadPhotoLabel": SimplePhrase;

  /** English: "Customer photos make it easier to recognize them throughout your account" */
  "input.uploadCustomerLogoText": SimplePhrase;

  /** English: "Value" */
  "input.valueLabel": SimplePhrase;

  /** English: "Add a value" */
  "input.valuePlaceholder": SimplePhrase;

  /** English: "Add value" */
  "input.valueAddButton": SimplePhrase;

  /** English: "The value entered in this field will no longer be viewable once you click connect or save this page. However, you will still be able to enter a new value at any time." */
  "input.writeOnly.alert": SimplePhrase;

  /** English: "Replace Existing Value" */
  "input.writeOnly.replaceValueTooltip": SimplePhrase;

  /** English: "The value entered in the field below will no longer be viewable once you click “Save Value.”" */
  "input.writeOnly.replaceValueConfirmation.message": SimplePhrase;

  /** English: "Replace Existing Value" */
  "input.writeOnly.replaceValueConfirmation.title": SimplePhrase;

  /** English: "Cancel" */
  "input.writeOnly.replaceValueConfirmation.cancel": SimplePhrase;

  /** English: "Save Value" */
  "input.writeOnly.replaceValueConfirmation.submit": SimplePhrase;
}

export const inputPhrases: InputPhrases = {
  "input.alertMonitorLabel": "Monitor",
  "input.alertTriggerLabel": "Alert trigger",
  "input.allowEmbeddedDesignerLabel": "Allow embedded designer",
  "input.allowMultipleInstancesLabel": "Allow multiple instances",
  "input.apiKeyAddButton": "Add API key",
  "input.apiKeyLabel": "API key",
  "input.apiKeyPlaceholder": "No API key configured",
  "input.categoryDisabledHelper.integration": {
    _: "Category can only be updated in the %{integrationSingularLower} details.",
    integrationSingularLower: "integration",
  },
  "input.categoryLabel": "Category",
  "input.codePlaceholder": "Edit",
  "input.commentLabel": "Comment",
  "input.confirmRequiredTextLabel": "Confirmation text",
  "input.contentTypeLabel": "Content type",
  "input.customerDeployableLabel": "Customer deployable",
  "input.customerLabel": "Customer",
  "input.dateError": "There was an error",
  "input.dateTimeError": "There was an error",
  "input.defaultValueLabel": "Default value",
  "input.descriptionDisabledHelper.integration": {
    _: "Description can only be updated in the %{integrationSingularLower} details.",
    integrationSingularLower: "integration",
  },
  "input.descriptionLabel": "Description",
  "input.disableLogsLabel": "Disable logs",
  "input.disableStepOutputsLabel": "Disable step outputs",
  "input.emailLabel": "Email",
  "input.endDateHelperText": {
    _: "* Maximum filter range is %{hours} hours",
    hours: 48,
  },
  "input.endDateLabel": "End date/time",
  "input.externalIdLabel": "External ID",
  "input.failedPreprocessFlowsOnlyLabel": "Show only failed preprocess flows",
  "input.filterSearchPlaceholder": { _: "Search %{type}", type: "" },
  "input.hasOutdatedComponentsLabel": "Has outdated components",
  "input.headersAddButton": "Add header",
  "input.headersKeyLabel": "Key",
  "input.headersLabel": "Headers",
  "input.headersValueLabel": "Value",
  "input.includeCustomerComponentsLabel": "Include customer components",
  "input.includeCustomerIntegrationsLabel": {
    _: "Include customer %{integrationPluralLower}",
    integrationPluralLower: "integrations",
  },
  "input.instanceLabel": "Instance",
  "input.integrationLabel": {
    _: "%{integrationSingular}",
    integrationSingular: "Integration",
  },
  "input.integrationVersionLabel": {
    _: "%{integrationSingular} version",
    integrationSingular: "Integration",
  },
  "input.integrationVersionLatestLabel": "Designer version",
  "input.keyLabel": "Key",
  "input.keyPlaceholder": "Key",
  "input.labelsLabel": "Labels",
  "input.latestVersionLabel": "Designer version",
  "input.logSeverityLabel": "Log severity",
  "input.logType.integrationConnectionValue": "Connection Only",
  "input.logType.integrationExecutionAndConnectionValue":
    "Execution & Connection",
  "input.logType.integrationExecutionValue": "Execution Only",
  "input.logTypeLabel": "Log type",
  "input.marketplaceVersionLabel": {
    _: "%{marketplaceSingular} version",
    marketplaceSingular: "Marketplace",
  },
  "input.nameDisabledHelper.integration": {
    _: "Name can only be updated in the %{integrationSingularLower} details.",
    integrationSingularLower: "integration",
  },
  "input.nameLabel": "Name",
  "input.noOptionsValue": "No options found",
  "input.excludePolledNoChanges":
    "Exclude executions without trigger-detected changes",
  "input.noneValue": "None",
  "input.objectFieldMapPlaceholder": "Edit",
  "input.originalOnlyLabel": "Show original executions only",
  "input.payloadBodyLabel": "Payload body",
  "input.postUrlLabel": "Post URL",
  "input.preventCustomerDeploymentLabel": "Prevent customer deployment",
  "input.roleLabel": "Role",
  "input.selectFlowLabel": "Flow selector",
  "input.severityLabel": "Log severity",
  "input.showOnlyPrivateComponentsLabel": "Show only private components",
  "input.showOnlyTemplatesLabel": "Show only templates",
  "input.startDateLabel": "Start date/time",
  "input.status.allValue": "All",
  "input.status.disabledValue": "Disabled",
  "input.status.enabledValue": "Enabled",
  "input.status.failedValue": "Failed",
  "input.status.runningValue": "Running",
  "input.status.successfulValue": "Successful",
  "input.status.clearedValue": "Cleared",
  "input.status.unclearedValue": "Uncleared",
  "input.statusLabel": "Status",
  "input.stepLabel": "Step",
  "input.timeMeasurement.hoursValue": "Hours",
  "input.timeMeasurement.minutesValue": "Minutes",
  "input.timeMeasurement.secondsValue": "Seconds",
  "input.timeRangeLabel": "Time range",
  "input.timeRange.past15MinutesValue": "Past 15 Minutes",
  "input.timeRange.pastHourValue": "Past Hour",
  "input.timeRange.past24HoursValue": "Past 24 Hours",
  "input.timeRange.customValue": "Custom",
  "input.timeRangeRange.surroundingValue": "Surrounding",
  "input.timeRangeRange.afterValue": "After",
  "input.timeRangeRange.beforeValue": "Before",
  "input.triggerLabel": "Trigger",
  "input.uploadCustomerLogoText":
    "Customer photos make it easier to recognize them throughout your account",
  "input.uploadPhotoLabel": "Upload a photo",
  "input.urlLabel": "URL",
  "input.valueAddButton": "Add value",
  "input.valueLabel": "Value",
  "input.valuePlaceholder": "Add a value",
  "input.writeOnly.alert":
    "The value entered in this field will no longer be viewable once you click connect or save this page. However, you will still be able to enter a new value at any time.",
  "input.writeOnly.replaceValueTooltip": "Replace existing value",
  "input.writeOnly.replaceValueConfirmation.message":
    'The value entered in the field below will no longer be viewable once you click "Save value".',
  "input.writeOnly.replaceValueConfirmation.title": "Replace existing value",
  "input.writeOnly.replaceValueConfirmation.cancel": "Cancel",
  "input.writeOnly.replaceValueConfirmation.submit": "Save value",
};
