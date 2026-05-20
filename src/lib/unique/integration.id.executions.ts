import type { NamespacedSharedAndUniquePhrases } from "../../types";

// biome-ignore lint/complexity/noBannedTypes: placeholder intersected into UniquePhrases; Record<string, never> would forbid valid keys.
export type IntegrationIdExecutionsPhrases = {};

export const integrationIdExecutionsPhrases: NamespacedSharedAndUniquePhrases<IntegrationIdExecutionsPhrases> =
  {
    "integrations.id.executions__filterResults.placeholderText":
      "Run an instance to see results",
    "integrations.id.executions__filterResults.placeholderTitle":
      "No Executions",
  };
