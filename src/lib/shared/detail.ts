import { ComplexPhrase, SimplePhrase } from "../../types";

export interface DetailPhrases {
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

  /** English: "Instance" */
  "detail.instanceLabel": SimplePhrase;

  /** English: "Integration" */
  "detail.integrationLabel": SimplePhrase;

  /** English: "Labels" */
  "detail.labelsLabel": SimplePhrase;

  /** English: "Last Run" */
  "detail.lastRunLabel": SimplePhrase;

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

  /** English: "Running" */
  "detail.statusRunningValue": SimplePhrase;

  /** English: "Activated but not configured" */
  "detail.statusUnconfiguredValue": SimplePhrase;

  /** English: "Version" */
  "detail.versionLabel": SimplePhrase;
}

export const detailPhrases: DetailPhrases = {
  "detail.categoryLabel": "Category",
  "detail.configVariableLabel": "Config Variable",
  "detail.customerLabel": "Customer",
  "detail.descriptionLabel": "Description",
  "detail.executionLabel": "Execution",
  "detail.executionText": "View in Execution Context",
  "detail.instanceLabel": "Instance",
  "detail.integrationLabel": "Integration",
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
  "detail.statusPausedValue": "Paused",
  "detail.statusRunningValue": "Running",
  "detail.statusUnconfiguredValue": "Activated but not configured",
  "detail.versionLabel": "Version",
};
