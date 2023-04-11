import { Phrases } from "./Phrases";
import { PickByType } from "./PickByType";

export type ComplexPhrase<
  T extends Record<string, string | boolean | number> = Record<
    string,
    string | boolean | number
  >
> = T & {
  _?: string;
};

export type ComplexPhrases = PickByType<Phrases, ComplexPhrase>;
