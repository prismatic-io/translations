import { NamespacedSharedPhrases } from "./NamespacedSharedPhrases";
import { UniquePhrases } from "../lib/unique";

export type NamespacedSharedAndUniquePhrases<
  T extends unknown = UniquePhrases
> = Partial<NamespacedSharedPhrases> & T;
