import { NamespacedSharedAndSharedAndUniquePhrases } from "./NamespacedSharedAndSharedAndUniquePhrases";
import { SharedAndUniquePhrases } from "./SharedAndUniquePhrases";

export type Phrases = Partial<NamespacedSharedAndSharedAndUniquePhrases>;

export type Phrase = keyof SharedAndUniquePhrases;

export type PhraseWithNamespace =
  keyof NamespacedSharedAndSharedAndUniquePhrases;
