import {
  ComplexPhrase,
  NamespacedSharedAndUniquePhrases,
  SimplePhrase,
} from "../../types";

export interface IntegrationIdPhrases {
  /** English: "Please contact %{organization} to activate this %{integrationSingularLower}." */
  "integrations.id__banner.customerActivateText": ComplexPhrase<{
    integrationSingularLower: string;
    organization: string;
  }>;

  /** English: "Please contact %{organization} to update to latest version." */
  "integrations.id__banner.customerUpdateText": ComplexPhrase<{
    organization: string;
  }>;

  /** English: "Your %{integrationSingularLower} is enabled" */
  "integrations.id__banner.enabledText": ComplexPhrase<{
    integrationSingularLower: string;
  }> | SimplePhrase;

  /** English: "Pause %{integrationSingular}" */
  "integrations.id__banner.pauseButton": ComplexPhrase<{
    integrationSingular: string;
  }> | SimplePhrase;

  /** English: "Your %{integrationSingularLower} is paused" */
  "integrations.id__banner.pausedText": ComplexPhrase<{
    integrationSingularLower: string;
  }> | SimplePhrase;

  /** English: "Unpause %{integrationSingular}" */
  "integrations.id__banner.unpauseButton": ComplexPhrase<{
    integrationSingular: string;
  }> | SimplePhrase;

  /** English: "Update" */
  "integrations.id__banner.updateButton": SimplePhrase;

  /** English: "There is an update available" */
  "integrations.id__banner.updateText": SimplePhrase;

  /** English: "Configure User Level Configuration" */
  "integrations.id__filterBar.configureUserButton": SimplePhrase;

  /** English: "Reconfigure" */
  "integrations.id__filterBar.reconfigureButton": SimplePhrase;

  /** English: "Reconfigure User Level Configuration" */
  "integrations.id__filterBar.reconfigureUserButton": SimplePhrase;

  /** English: "View Configuration" */
  "integrations.id__filterBar.viewConfigurationButton": SimplePhrase;

  /** English: "View User Level Configuration" */
  "integrations.id__filterBar.viewUserConfigurationButton": SimplePhrase;

  /** English: This %{integrationSingularLower} has a new version. Previous versions are read-only. */
  "integrations.id__newVersionBanner.newVersionText": ComplexPhrase<{
    integrationSingularLower: string;
  }> | SimplePhrase;

  /** English: "View Current" */
  "integrations.id__newVersionBanner.viewCurrentButton": SimplePhrase;
}

export const integrationIdPhrases: NamespacedSharedAndUniquePhrases<IntegrationIdPhrases> =
  {
    "integrations.id__banner.customerActivateText": {
      _: "Please contact %{organization} to activate this %{integrationSingularLower}.",
      organization: "organization",
      integrationSingularLower: "integration",
    },
    "integrations.id__banner.customerUpdateText": {
      _: "Please contact %{organization} to update to latest version.",
      organization: "organization",
    },
    "integrations.id__banner.enabledText": {
      _: "Your %{integrationSingularLower} is enabled",
      integrationSingularLower: "integration",
    },
    "integrations.id__banner.pauseButton": {
      _: "Pause %{integrationSingular}",
      integrationSingular: "Integration",
    },
    "integrations.id__banner.pausedText": {
      _: "Your %{integrationSingularLower} is paused",
      integrationSingularLower: "integration",
    },
    "integrations.id__banner.unpauseButton": {
      _: "Unpause %{integrationSingular}",
      integrationSingular: "Integration",
    },
    "integrations.id__banner.updateButton": "Update",
    "integrations.id__banner.updateText": "There is an update available",
    "integrations.id__filterBar.configureUserButton":
      "Configure User Level Configuration",
    "integrations.id__filterBar.reconfigureButton": "Reconfigure",
    "integrations.id__filterBar.reconfigureUserButton":
      "Reconfigure User Level Configuration",
    "integrations.id__filterBar.viewConfigurationButton": "View Configuration",
    "integrations.id__filterBar.viewUserConfigurationButton":
      "View User Level Configuration",
    "integrations.id__newVersionBanner.newVersionText": {
      _: "This %{integrationSingularLower} has a new version. Previous versions are read-only.",
      integrationSingularLower: "integration",
    },
    "integrations.id__newVersionBanner.viewCurrentButton": "View Current",
  };
