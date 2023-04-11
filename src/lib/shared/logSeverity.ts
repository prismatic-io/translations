import { SimplePhrase } from "../../types";

export interface LogSeverityPhrases {
  /** English: "Debug" */
  "logSeverity.debug": SimplePhrase;

  /** English: "Error" */
  "logSeverity.error": SimplePhrase;

  /** English: "Fatal" */
  "logSeverity.fatal": SimplePhrase;

  /** English: "Info" */
  "logSeverity.info": SimplePhrase;

  /** English: "Metric" */
  "logSeverity.metric": SimplePhrase;

  /** English: "Trace" */
  "logSeverity.trace": SimplePhrase;

  /** English: "Warn" */
  "logSeverity.warn": SimplePhrase;
}

export const logSeverityPhrases: LogSeverityPhrases = {
  "logSeverity.debug": "Debug",
  "logSeverity.error": "Error",
  "logSeverity.fatal": "Fatal",
  "logSeverity.info": "Info",
  "logSeverity.metric": "Metric",
  "logSeverity.trace": "Trace",
  "logSeverity.warn": "Warn",
};
