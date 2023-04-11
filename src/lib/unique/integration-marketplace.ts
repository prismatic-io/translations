import { NamespacedSharedAndUniquePhrases, SimplePhrase } from "../../types";

export interface IntegrationMarketplacePhrases {
  /** English: "Activated but not configured" */
  "integration-marketplace__card.activateLabel": SimplePhrase;

  /** English: "Paused" */
  "integration-marketplace__card.pausedLabel": SimplePhrase;

  /** English: "Activated" */
  "integration-marketplace__card.runningLabel": SimplePhrase;

  /** English: "Activated but not configured" */
  "integration-marketplace__card.ulcUnconfiguredLabel": SimplePhrase;

  /** English: "Activated" */
  "integration-marketplace__filterBar.activateButton": SimplePhrase;

  /** English: "All" */
  "integration-marketplace__filterBar.allButton": SimplePhrase;
}

export const integrationMarketplacePhrases: NamespacedSharedAndUniquePhrases<IntegrationMarketplacePhrases> =
  {
    "integration-marketplace__card.activateLabel":
      "Activated but not configured",
    "integration-marketplace__card.pausedLabel": "Paused",
    "integration-marketplace__card.runningLabel": "Activated",
    "integration-marketplace__card.ulcUnconfiguredLabel":
      "Activated but not configured",
    "integration-marketplace__filterBar.activateButton": "Activated",
    "integration-marketplace__filterBar.allButton": "All",
    "integration-marketplace__filterBar.title": "Marketplace",
    "integration-marketplace__filterResults.placeholderText":
      "Click the add integration button to add an integration.",
    "integration-marketplace__filterResults.placeholderTitle": "integrations",
    "integration-marketplace__input.filterSearchPlaceholder": {
      _: "Search integrations",
    },
  };
