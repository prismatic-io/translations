import { ComplexPhrase, SimplePhrase } from "../../types";

export interface TabPhrases {
  /** English: "Monitors" */
  "alertMonitorsTab.title": SimplePhrase;

  /** English: "User Configuration" */
  "configurationTab.title": SimplePhrase;

  /** English: "Executions" */
  "executionsTab.title": SimplePhrase;

  /** English: "Payload" */
  "payloadTab.title": SimplePhrase;

  /** English: "Summary" */
  "summaryTab.title": SimplePhrase;

  /** English: "Test is running" */
  "testTab.testResults.banner.text--testIsRunning": SimplePhrase;

  /** English: "View Execution" */
  "testTab.testResults.button": SimplePhrase;

  /** English: "Endpoint test result" */
  "testTab.testResults.title": SimplePhrase;

  /** English: "Test" */
  "testTab.title": SimplePhrase;

  /** English: "Result preview not available for this step" */
  "stepOutputsTab.noResultsText": SimplePhrase;

  /** English: "No step outputs available" */
  "stepOutputsTab.noStepOutputsText": SimplePhrase;

  /** English: "Step Not Available" */
  "stepOutputsTab.stepNotSelected": SimplePhrase;

  /** English: "Step Outputs" */
  "stepOutputsTab.title": SimplePhrase;

  /** English: "Error" */
  "logsTab.banner.error": ComplexPhrase<{ count: number }>;

  /** English: "Errors" */
  "logsTab.banner.errorPlural": ComplexPhrase<{ count: number }>;

  /** English: "No logs available" */
  "logsTab.noLogsTitle": SimplePhrase;

  /** English: "Select a test run to view test logs" */
  "logsTab.noTestSelectedText": SimplePhrase;

  /** English: "No test run selected" */
  "logsTab.noTestSelectedTitle": SimplePhrase;

  /** English: "Show all logs" */
  "logsTab.showAllButton": SimplePhrase;

  /** English: "Show only errors" */
  "logsTab.showErrorsButton": SimplePhrase;

  /** English: "Logs" */
  "logsTab.title": SimplePhrase;

  /** English: "Cancelled by a new execution" */
  "retryTab.cancelledLabel": SimplePhrase;

  /** English: "Next retry" */
  "retryTab.scheduledRetryLabel": SimplePhrase;

  /** English: "%{retryIndex} of %{maxRetryCount} at %{nextScheduledRetry}" */
  "retryTab.scheduledRetryText": ComplexPhrase<{
    maxRetryCount: number;
    nextScheduledRetry: string;
    retryIndex: number;
  }>;

  /** English: "Failed after %{retryCount} retries" */
  "retryTab.statusFailedPluralText": ComplexPhrase<{ retryCount: number }>;

  /** English: "Failed after %{retryCount} retry" */
  "retryTab.statusFailedText": ComplexPhrase<{ retryCount: number }>;

  /** English: "Final status" */
  "retryTab.statusLabel": SimplePhrase;

  /** English: "Succeeded on retry %{retryCount}" */
  "retryTab.statusSuccessText": ComplexPhrase<{ retryCount: number }>;

  /** English: "Retry" */
  "retryTab.title": SimplePhrase;
}

export const tabPhrases: TabPhrases = {
  "alertMonitorsTab.title": "Monitors",
  "configurationTab.title": "User Configuration",
  "executionsTab.title": "Executions",
  "payloadTab.title": "Payload",
  "summaryTab.title": "Summary",

  // test tab
  "testTab.testResults.banner.text--testIsRunning": "Test is running",
  "testTab.testResults.button": "View Execution",
  "testTab.testResults.title": "Endpoint test result",
  "testTab.title": "Test",

  // step outputs tab
  "stepOutputsTab.noResultsText": "Result preview not available for this step",
  "stepOutputsTab.noStepOutputsText": "No step outputs available",
  "stepOutputsTab.stepNotSelected": "Step Not Available",
  "stepOutputsTab.title": "Step Outputs",

  // log tab
  "logsTab.banner.error": { _: "Error", count: 0 },
  "logsTab.banner.errorPlural": { _: "Errors", count: 0 },
  "logsTab.noLogsTitle": "No logs available",
  "logsTab.noTestSelectedText": "Select a test run to view test logs",
  "logsTab.noTestSelectedTitle": "No test run selected",
  "logsTab.showAllButton": "Show all logs",
  "logsTab.showErrorsButton": "Show only errors",
  "logsTab.title": "Logs",

  // retry tab
  "retryTab.cancelledLabel": "Cancelled by a new execution",
  "retryTab.scheduledRetryLabel": "Next retry",
  "retryTab.scheduledRetryText": {
    _: "%{retryIndex} of %{maxRetryCount} at %{nextScheduledRetry}",
    maxRetryCount: 0,
    nextScheduledRetry: "",
    retryIndex: 0,
  },
  "retryTab.statusFailedPluralText": {
    _: "Failed after %{retryCount} retries",
    retryCount: 0,
  },
  "retryTab.statusFailedText": {
    _: "Failed after %{retryCount} retry",
    retryCount: 0,
  },
  "retryTab.statusLabel": "Final status",
  "retryTab.statusSuccessText": {
    _: "Succeeded on retry %{retryCount}",
    retryCount: 0,
  },
  "retryTab.title": "Retry",
};
