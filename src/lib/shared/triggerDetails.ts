import { SimplePhrase } from "../../types";

export interface TriggerDetailsPhrases {
  /** English: "Trigger details" */
  "triggerDetails.title": SimplePhrase;

  /** English: "API key configured" */
  "triggerDetails.apiConfiguredText": SimplePhrase;

  /** English: "No API key configured" */
  "triggerDetails.noApiConfiguredText": SimplePhrase;

  /** English: URL will be generated after configuration */
  "triggerDetails.emptyFlowConfig": SimplePhrase;
}

export const triggerDetailsPhrases: TriggerDetailsPhrases = {
  "triggerDetails.apiConfiguredText": "API key configured",
  "triggerDetails.noApiConfiguredText": "No API key configured",
  "triggerDetails.title": "Trigger details",
  "triggerDetails.emptyFlowConfig": "URL will be generated after configuration",
};
