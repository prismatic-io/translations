import { ComplexPhrase, NamespacedSharedAndUniquePhrases, SimplePhrase } from "../../types";

export interface IntegrationsPhrases {
  /** English: "Add %{integrationSingle}" */
  "integrations__filterBar.addButton": ComplexPhrase<{
    integrationSingle: string;
  }> | SimplePhrase;
}

export const integrationsPhrases: NamespacedSharedAndUniquePhrases<IntegrationsPhrases> =
  {
    "integrations__filterBar.title": "Integrations",

    "integrations__filterBar.addButton": {
      _: "Add %{integrationSingle}",
      integrationSingle: "Integration",
    },
  };
