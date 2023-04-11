import { NamespacedSharedAndUniquePhrases, SimplePhrase } from "../../types";

export interface IntegrationIdAlertMonitorsPhrases {
  /** English: "Click the add monitor button to add a monitor." */
  "integrations.id.alert-monitors__filterResults.placeholderText--hasInstanceOrCustomer": SimplePhrase;
}

export const integrationIdAlertMonitorsPhrases: NamespacedSharedAndUniquePhrases<IntegrationIdAlertMonitorsPhrases> =
  {
    "integrations.id.alert-monitors__filterResults.placeholderCta":
      "Go to customers",
    "integrations.id.alert-monitors__filterResults.placeholderText":
      "To add a monitor, first select a customer.",
    "integrations.id.alert-monitors__filterResults.placeholderText--hasInstanceOrCustomer":
      "Click the add monitor button to add a monitor.",
    "integrations.id.alert-monitors__filterResults.placeholderTitle":
      "Monitors",
    "integrations.id.alert-monitors__input.filterSearchPlaceholder": {
      _: "Search monitors",
    },
  };
