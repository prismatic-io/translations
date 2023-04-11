import { ComplexPhrase } from "../types/ComplexPhrase";
import { SimplePhrase } from "../types/SimplePhrase";

export const isComplexPhrase = (
  phrase: SimplePhrase | ComplexPhrase
): phrase is ComplexPhrase => typeof phrase === "object";