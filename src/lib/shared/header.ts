import { SimplePhrase } from "../../types";

export interface HeaderPhrases {
  /** English: "Actions" */
  "header.actionsText": SimplePhrase;

  /** English: "Connections" */
  "header.connectionsText": SimplePhrase;

  /** English: "Data Sources" */
  "header.dataSourcesText": SimplePhrase;

  /** English: "Triggers" */
  "header.triggersText": SimplePhrase;

  /** English: "Uncategorized" */
  "header.uncategorizedText": SimplePhrase;

  /** English: "Execution Details" */
  "executionDetails.title": SimplePhrase;

  /** English: "Executions" */
  "executionOptions.title": SimplePhrase;
}

export const headerPhrases: HeaderPhrases = {
  "header.actionsText": "Actions",
  "header.connectionsText": "Connections",
  "header.dataSourcesText": "Data Sources",
  "header.triggersText": "Triggers",
  "header.uncategorizedText": "Uncategorized",
  "executionDetails.title": "Execution Details",
  "executionOptions.title": "Executions",
};
