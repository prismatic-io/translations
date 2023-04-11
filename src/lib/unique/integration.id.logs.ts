import { NamespacedSharedAndUniquePhrases, SimplePhrase } from "../../types";

export interface IntegrationIdLogsPhrases {
  /** English: "Go to instances" */
  "integrations.id.logs__filterResults.placeholderCta--hasCustomer": SimplePhrase;

  /** English: "To add logs, first start an instance." */
  "integrations.id.logs__filterResults.placeholderText--hasCustomer": SimplePhrase;

  /** English: "To add logs, make sure your instance is running." */
  "integrations.id.logs__filterResults.placeholderText--hasInstance": SimplePhrase;
}

export const integrationIdLogsPhrases: NamespacedSharedAndUniquePhrases<IntegrationIdLogsPhrases> =
  {
    "integrations.id.logs__filterResults.placeholderCta": "Go to instances",
    "integrations.id.logs__filterResults.placeholderCta--hasCustomer":
      "Go to instances",
    "integrations.id.logs__filterResults.placeholderText":
      "To add logs, first start an instance.",
    "integrations.id.logs__filterResults.placeholderText--hasCustomer":
      "To add logs, first start an instance.",
    "integrations.id.logs__filterResults.placeholderText--hasInstance":
      "To add logs, make sure your instance is running.",
    "integrations.id.logs__filterResults.placeholderTitle": "Logs",
    "integrations.id.logs__input.filterSearchPlaceholder": { _: "Search logs" },
  };
