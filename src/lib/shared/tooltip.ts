import { SimplePhrase } from "../../types";

export interface TooltipPhrases {
  /** English: "Close" */
  "tooltip.close": SimplePhrase;

  /** English: "Connection Logs" */
  "tooltip.connectionLogs": SimplePhrase;

  /** English: "No Connection Logs" */
  "tooltip.connectionLogs--noLogs": SimplePhrase;

  /** English: "Copied to clipboard!" */
  "tooltip.copyConfirmed": SimplePhrase;

  /** English: "Copy cURL to clipboard" */
  "tooltip.copyCurl": SimplePhrase;

  /** English: "Copy log to clipboard" */
  "tooltip.copyLog": SimplePhrase;

  /** English: "Copy payload to clipboard" */
  "tooltip.copyPayload": SimplePhrase;

  /** English: "Copy URL to clipboard" */
  "tooltip.copyUrl": SimplePhrase;

  /** English: "Upgrade the Marketplace Configuration to this latest published version." */
  "tooltip.marketplaceVersion": SimplePhrase;

  /** English: "Pass this API key via an HTTP header" */
  "tooltip.passApiKeyToHeader": SimplePhrase;

  /** English: "Restore default" */
  "tooltip.restoreDefault": SimplePhrase;
}

export const tooltipPhrases: TooltipPhrases = {
  "tooltip.close": "Close",
  "tooltip.connectionLogs": "Connection Logs",
  "tooltip.connectionLogs--noLogs": "No Connection Logs",
  "tooltip.copyConfirmed": "Copied to clipboard!",
  "tooltip.copyCurl": "Copy cURL to clipboard",
  "tooltip.copyLog": "Copy log to clipboard",
  "tooltip.copyPayload": "Copy payload to clipboard",
  "tooltip.copyUrl": "Copy URL to clipboard",
  "tooltip.marketplaceVersion":
    "Upgrade the Marketplace Configuration to this latest published version.",
  "tooltip.passApiKeyToHeader": "Pass this API key via an HTTP header",
  "tooltip.restoreDefault": "Restore default",
};
