import { SimplePhrase, ComplexPhrase, Phrases } from "./types";
import { phrases } from "./lib";

export const isSimplePhrase = <T extends keyof Phrases>(
  key: T,
  value: SimplePhrase | ComplexPhrase
): value is SimplePhrase =>
  (!phrases?.[key] && typeof value === "string") ||
  typeof phrases[key] === "string";

export const isComplexPhrase = (
  phrase: SimplePhrase | ComplexPhrase
): phrase is ComplexPhrase => typeof phrase === "object";

export const getComplexPhase = (phrase: ComplexPhrase) =>
  Object.entries(phrase).reduce(
    (acc, [key, val]) =>
      key !== "_" ? acc.replace(`%{${key}}`, val as string) : acc,
    phrase?._ ?? ""
  );
