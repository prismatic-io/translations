import { SimplePhrase, ComplexPhrase, Phrases } from "./types";

export const isSimplePhrase = <T extends keyof Phrases>(
  phrase: SimplePhrase | ComplexPhrase
): phrase is SimplePhrase => typeof phrase === "string";

export const isComplexPhrase = (
  phrase: SimplePhrase | ComplexPhrase
): phrase is ComplexPhrase => typeof phrase === "object";

export const getComplexPhase = (phrase: ComplexPhrase) =>
  Object.entries(phrase).reduce(
    (acc, [key, val]) =>
      key !== "_" ? acc.replace(`%{${key}}`, val as string) : acc,
    phrase?._ ?? ""
  );
