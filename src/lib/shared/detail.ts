import { ComplexPhrase, SimplePhrase } from "../../types";

export interface DetailPhrases {
  /** English: "Attachments" */
  "detail.attachmentsLabel": SimplePhrase;

  /** English: "Category" */
  "detail.categoryLabel": SimplePhrase;

  /** English: "Config Variable" */
  "detail.configVariableLabel": SimplePhrase;

  /** English: "Customer" */
  "detail.customerLabel": SimplePhrase;

  /** English: "Description" */
  "detail.descriptionLabel": SimplePhrase;

  /** English: "Execution" */
  "detail.executionLabel": SimplePhrase;

  /** English: "View in Execution Context" */
  "detail.executionText": SimplePhrase;

  /** English: "Executions in the last 24 hours" */
  "detail.executionslast24Hours": SimplePhrase;

  /** English: "Instance" */
  "detail.instanceLabel": SimplePhrase;

  /** English: "Instances" */
  "detail.instancesLabel": SimplePhrase;

  /** English: "Integration" */
  "detail.integrationLabel":
    | ComplexPhrase<{
        integrationSingular: string;
      }>
    | SimplePhrase;

  /** English: "Labels" */
  "detail.labelsLabel": SimplePhrase;

  /** English: "Last Run" */
  "detail.lastRunLabel": SimplePhrase;

  /** English: "Last Deployed" */
  "detail.lastDeployedLabel": SimplePhrase;

  /** English: "Overview" */
  "detail.overviewLabel": SimplePhrase;

  /** English: "Show more..." */
  "detail.retryButton": SimplePhrase;

  /** English: "Retry" */
  "detail.retryLabel": SimplePhrase;

  /** English: "%{retryCount} retries of %{maxRetryCount} total." */
  "detail.retryValue": ComplexPhrase<{
    retryCount: number;
    maxRetryCount: number;
  }>;

  /** English: "Status" */
  "detail.statusLabel": SimplePhrase;

  /** English: "Paused" */
  "detail.statusPausedValue": SimplePhrase;

  /** English: "Enabled" */
  "detail.statusEnabledValue": SimplePhrase;

  /** English: "Disabled" */
  "detail.statusDisabledValue": SimplePhrase;

  /** English: "Running" */
  "detail.statusRunningValue": SimplePhrase;

  /** English: "Activated but not configured" */
  "detail.statusUnconfiguredValue": SimplePhrase;

  /** English: "Team Members" */
  "detail.teamMembersLabel": SimplePhrase;

  /** English: "Triggered Monitors" */
  "detail.triggeredMonitorsLabel": SimplePhrase;

  /** English: "Users" */
  "detail.usersLabel": SimplePhrase;

  /** English: "Version" */
  "detail.versionLabel": SimplePhrase;

  /** English: "Created" */
  "detail.createdLabel": SimplePhrase;

  /** English: "Tags" */
  "detail.tagsLabel": SimplePhrase;

  /** English: "Flow count" */
  "detail.flowCountLabel": SimplePhrase;

  /** English: "Triggered Alert" */
  "detail.triggeredAlertLabel": SimplePhrase;

  /** English: "Add attachment" */
  "detail.addAttachmentLabel": SimplePhrase;

  /** English: "Documentation" */
  "detail.documentationLabel": SimplePhrase;

  /** English: "Import */
  "detail.importLabel": SimplePhrase;

  /** English: "Preview */
  "detail.previewLabel": SimplePhrase;

  /** English: "Available" */
  "detail.availableLabel": SimplePhrase;
}

export const detailPhrases: DetailPhrases = {
  "detail.attachmentsLabel": "Attachments",
  "detail.categoryLabel": "Category",
  "detail.configVariableLabel": "Config Variable",
  "detail.customerLabel": "Customer",
  "detail.descriptionLabel": "Description",
  "detail.executionLabel": "Execution",
  "detail.executionText": "View in Execution Context",
  "detail.executionslast24Hours": "Executions in the last 24 hours",
  "detail.instanceLabel": "Instance",
  "detail.instancesLabel": "Instances",
  "detail.integrationLabel": {
    _: "%{integrationSingular}",
    integrationSingular: "Integration",
  },
  "detail.labelsLabel": "Labels",
  "detail.lastRunLabel": "Last Run",
  "detail.overviewLabel": "Overview",
  "detail.retryButton": "Show more...",
  "detail.retryLabel": "Retry",
  "detail.retryValue": {
    _: "%{retryCount} retries of %{maxRetryCount} total.",
    retryCount: 0,
    maxRetryCount: 0,
  },
  "detail.statusLabel": "Status",
  "detail.statusEnabledValue": "Enabled",
  "detail.statusDisabledValue": "Disabled",
  "detail.statusPausedValue": "Paused",
  "detail.statusRunningValue": "Running",
  "detail.statusUnconfiguredValue": "Activated but not configured",
  "detail.teamMembersLabel": "Team Members",
  "detail.triggeredMonitorsLabel": "Triggered Monitors",
  "detail.usersLabel": "Users",
  "detail.versionLabel": "Version",
  "detail.lastDeployedLabel": "Last Deployed",
  "detail.createdLabel": "Created",
  "detail.tagsLabel": "Tags",
  "detail.flowCountLabel": "Flow count",
  "detail.triggeredAlertLabel": "Triggered Alert",
  "detail.addAttachmentLabel": "Add attachment",
  "detail.documentationLabel": "Documentation",
  "detail.importLabel": "Import",
  "detail.previewLabel": "Preview",
  "detail.availableLabel": "Available",
};
