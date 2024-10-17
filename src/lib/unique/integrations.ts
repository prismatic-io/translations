import { ComplexPhrase, NamespacedSharedAndUniquePhrases, SimplePhrase } from "../../types";

export interface IntegrationsPhrases {
  /** English: "%{integrationPlural}" */
  "integrations__filterBar.title": ComplexPhrase<{
    integrationPlural: string;
  }> | SimplePhrase;

  /** English: "Add %{integrationSingular}" */
  "integrations__filterBar.addButton": ComplexPhrase<{
    integrationSingular: string;
  }> | SimplePhrase;
}

export const integrationsPhrases: NamespacedSharedAndUniquePhrases<IntegrationsPhrases> =
  {
    "integrations__filterBar.title": {
      _: "%{integrationPlural}",
      integrationPlural: "Integrations",
    },

    "integrations__filterBar.addButton": {
      _: "Add %{integrationSingular}",
      integrationSingular: "Integration",
    },
  };
