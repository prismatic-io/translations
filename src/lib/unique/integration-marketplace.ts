import { NamespacedSharedAndUniquePhrases, ComplexPhrase, SimplePhrase } from "../../types";

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

  /** English: "${marketplaceSingular}" */
  "integration-marketplace__filterBar.title": ComplexPhrase<{
    marketplaceSingular: string;
  }> | SimplePhrase;

  /** English: "${integrationSingular} is not configured." */
  "integration-marketplace.instanceUnconfiguredTooltip": ComplexPhrase<{
    integrationSingular: string;
  }> | SimplePhrase;

  /** English: "${integrationSingular} is paused." */
  "integration-marketplace.instancePausedTooltip": ComplexPhrase<{
    integrationSingular: string;
  }> | SimplePhrase;

  /** English: "${integrationSingular} is activated." */
  "integration-marketplace.instanceActivatedTooltip": ComplexPhrase<{
    integrationSingular: string;
  }> | SimplePhrase;

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

  /** English: "Add ${integrationSingular}" */
  "integration-marketplace.addIntegrationDialog.buttonText": ComplexPhrase<{
    integrationSingular: string;
  }> | SimplePhrase;

  /** English: "Select ${integrationSingular}" */
  "integration-marketplace.addIntegrationDialog.title": ComplexPhrase<{
    integrationSingular: string;
  }> | SimplePhrase;

  /** English: "Only published %{integrationPluralLower} can be used to create an instance." */
  "integration-marketplace.integrationPicker.text": ComplexPhrase<{
    integrationPluralLower: string;
  }> | SimplePhrase;

  "integration-marketplace__input.filterSearchPlaceholder": ComplexPhrase<{
    integrationPluralLower?: string;
  }> | SimplePhrase;
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
    "integration-marketplace__filterBar.title": {
      _: "%{marketplaceSingular}",
      marketplaceSingular: "Marketplace",
    },
    "integration-marketplace__filterResults.placeholderText":
      "Click the add integration button to add an integration.",
    "integration-marketplace__filterResults.placeholderTitle": "integrations",
    "integration-marketplace__input.filterSearchPlaceholder": {
      _: "Search %{integrationPluralLower}",
      integrationPluralLower: "integrations",
    },
    "integration-marketplace.instanceUnconfiguredTooltip": {
      _: "%{integrationSingular} is not configured.",
      integrationSingular: "Integration",
    },
    "integration-marketplace.instancePausedTooltip": {
      _: "%{integrationSingular} is paused.",
      integrationSingular: "Integration",
    },
    "integration-marketplace.instanceActivatedTooltip": {
      _: "%{integrationSingular} is activated.",
      integrationSingular: "Integration",
    },
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
    "integration-marketplace.addIntegrationDialog.buttonText": {
      _: "Add %{integrationSingular}",
      integrationSingular: "Integration",
    },
    "integration-marketplace.addIntegrationDialog.title": {
      _: "Select %{integrationSingular}",
      integrationSingular: "Integration",
    },
    "integration-marketplace.integrationPicker.text": {
      _: "Only published %{integrationPlural} can be used to create an instance.",
      integrationPluralLower: "integrations",
    }
  };
