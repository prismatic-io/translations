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

  /** English: "Integration is not configured." */
  "integration-marketplace.instanceUnconfiguredTooltip": SimplePhrase;

  /** English: "Integration is paused." */
  "integration-marketplace.instancePausedTooltip": SimplePhrase;

  /** English: "Integration is activated." */
  "integration-marketplace.instanceActivatedTooltip": SimplePhrase;

  /** English: "Current user is not configured." */
  "integration-marketplace.userUnconfiguredTooltip": SimplePhrase;

  /** English: "Current user is activated." */
  "integration-marketplace.userActivatedTooltip": SimplePhrase;

  /** English: "At least one instance is not configured." */
  "integration-marketplace.instancesUnconfiguredTooltip": SimplePhrase;

  /** English: "At least one instance is paused." */
  "integration-marketplace.instancesPausedTooltip": SimplePhrase;

  /** English: "All instances are activated." */
  "integration-marketplace.instancesActivatedTooltip": SimplePhrase;

  /** English: "At least one instance is not configured for current user." */
  "integration-marketplace.usersUnconfiguredTooltip": SimplePhrase;

  /** English: "All users are activated." */
  "integration-marketplace.usersActivatedTooltip": SimplePhrase;

  /** English: "Add Integration" */
  "integration-marketplace.addIntegrationDialog.buttonText": SimplePhrase;

  /** English: "Select Integration" */
  "integration-marketplace.addIntegrationDialog.title": SimplePhrase;

  /** English: "Only published integrations can be used to create an instance." */
  "integration-marketplace.integrationPicker.text": SimplePhrase;
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
    "integration-marketplace.instanceUnconfiguredTooltip":
      "Integration is not configured.",
    "integration-marketplace.instancePausedTooltip": "Integration is paused.",
    "integration-marketplace.instanceActivatedTooltip":
      "Integration is activated.",
    "integration-marketplace.userUnconfiguredTooltip":
      "Current user is not configured.",
    "integration-marketplace.userActivatedTooltip":
      "Current user is activated.",
    "integration-marketplace.instancesUnconfiguredTooltip":
      "At least one instance is not configured.",
    "integration-marketplace.instancesPausedTooltip":
      "At least one instance is paused.",
    "integration-marketplace.instancesActivatedTooltip":
      "All instances are activated.",
    "integration-marketplace.usersUnconfiguredTooltip":
      "At least one instance is not configured for current user.",
    "integration-marketplace.usersActivatedTooltip": "All users are activated.",
    "integration-marketplace.addIntegrationDialog.buttonText":
      "Add Integration",
    "integration-marketplace.addIntegrationDialog.title": "Select Integration",
    "integration-marketplace.integrationPicker.text":
      "Only published integrations can be used to create an instance.",
  };
