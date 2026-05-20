import type { ComplexPhrase, SimplePhrase } from "./types";

export const isSimplePhrase = (
  phrase: SimplePhrase | ComplexPhrase,
): phrase is SimplePhrase => typeof phrase === "string";

export const isComplexPhrase = (
  phrase: SimplePhrase | ComplexPhrase,
): phrase is ComplexPhrase => typeof phrase === "object";

export const getComplexPhase = (phrase: ComplexPhrase) =>
  Object.entries(phrase).reduce(
    (acc, [key, val]) =>
      key !== "_" ? acc.replace(`%{${key}}`, val as string) : acc,
    phrase?._ ?? "",
  );
