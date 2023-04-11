import { phrases } from "../lib";
import { ComplexPhrase } from "../types/ComplexPhrase";
import { Phrases } from "../types/Phrases";
import { SimplePhrase } from "../types/SimplePhrase";

export const isSimplePhrase = <T extends keyof Phrases>(
  key: T,
  value: SimplePhrase | ComplexPhrase
): value is SimplePhrase =>
  (!phrases?.[key] && typeof value === "string") ||
  typeof phrases[key] === "string";
