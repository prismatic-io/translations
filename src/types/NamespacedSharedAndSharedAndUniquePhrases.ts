import { SharedAndUniquePhrases } from "./SharedAndUniquePhrases";
import { NamespacedSharedPhrases } from "./NamespacedSharedPhrases";

export type NamespacedSharedAndSharedAndUniquePhrases =
  Partial<NamespacedSharedPhrases> & SharedAndUniquePhrases;
