import { SimplePhrase } from "../../types";

export interface ExecutionPhrases {
  /** English: "Execution Details" */
  "executionDetails.title": SimplePhrase;

  /** English: "Executions" */
  "executionOptions.title": SimplePhrase;

  /** English: "Executions in the last 24 hours" */
  "executionOptions.last24Hours": SimplePhrase;

  /** English: "Execution Filters" */
  "executionFilters.title": SimplePhrase;

  /** English: "Reset Filters" */
  "executionFilters.reset": SimplePhrase;
}

export const executionPhrases: ExecutionPhrases = {
  "executionDetails.title": "Execution Details",
  "executionOptions.title": "Executions",
  "executionOptions.last24Hours": "Executions in the last 24 hours",
  "executionFilters.title": "Execution Filters",
  "executionFilters.reset": "Reset Filters",
};
