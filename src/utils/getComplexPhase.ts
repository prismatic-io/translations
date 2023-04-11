import { ComplexPhrase } from "../types/ComplexPhrase";

export const getComplexPhase = (phrase: ComplexPhrase) =>
  Object.entries(phrase).reduce(
    (acc, [key, val]) =>
      key !== "_" ? acc.replace(`%{${key}}`, val as string) : acc,
    phrase?._ ?? ""
  );
