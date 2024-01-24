import {
  ComplexPhrase,
  NamespacedSharedAndUniquePhrases,
  SimplePhrase,
} from "../../types";

export interface IntegrationIdPhrases {
  /** English: "Please contact %{organization} to activate this integration." */
  "integrations.id__banner.customerActivateText": ComplexPhrase<{
    organization: string;
  }>;

  /** English: "Please contact %{organization} to update to latest version." */
  "integrations.id__banner.customerUpdateText": ComplexPhrase<{
    organization: string;
  }>;

  /** English: "Your integration is enabled" */
  "integrations.id__banner.enabledText": SimplePhrase;

  /** English: "Pause Integration" */
  "integrations.id__banner.pauseButton": SimplePhrase;

  /** English: "Your integration is paused" */
  "integrations.id__banner.pausedText": SimplePhrase;

  /** English: "Unpause Integration" */
  "integrations.id__banner.unpauseButton": SimplePhrase;

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

  /** English: This integration has a new version. Previous versions are read-only. */
  "integrations.id__newVersionBanner.newVersionText": SimplePhrase;

  /** English: "View Current" */
  "integrations.id__newVersionBanner.viewCurrentButton": SimplePhrase;
}

export const integrationIdPhrases: NamespacedSharedAndUniquePhrases<IntegrationIdPhrases> =
  {
    "integrations.id__banner.customerActivateText": {
      _: "Please contact %{organization} to activate this integration.",
      organization: "organization",
    },
    "integrations.id__banner.customerUpdateText": {
      _: "Please contact %{organization} to update to latest version.",
      organization: "organization",
    },
    "integrations.id__banner.enabledText": "Your integration is enabled",
    "integrations.id__banner.pauseButton": "Pause Integration",
    "integrations.id__banner.pausedText": "Your integration is paused",
    "integrations.id__banner.unpauseButton": "Unpause Integration",
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
    "integrations.id__newVersionBanner.newVersionText":
      "This integration has a new version. Previous versions are read-only.",
    "integrations.id__newVersionBanner.viewCurrentButton": "View Current",
  };
