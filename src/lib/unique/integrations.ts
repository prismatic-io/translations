import { ComplexPhrase, NamespacedSharedAndUniquePhrases, SimplePhrase } from "../../types";

export interface IntegrationsPhrases {
  /** English: "Add %{integrationSingular}" */
  "integrations__filterBar.addButton": ComplexPhrase<{
    integrationSingular: string;
  }> | SimplePhrase;
}

export const integrationsPhrases: NamespacedSharedAndUniquePhrases<IntegrationsPhrases> =
  {
    "integrations__filterBar.title": "Integrations",

    "integrations__filterBar.addButton": {
      _: "Add %{integrationSingular}",
      integrationSingular: "Integration",
    },
  };
