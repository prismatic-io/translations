import { Phrases } from "../types";
import { sharedPhrases } from "./shared";
import { uniquePhrases } from "./unique";

export { sharedPhrases, uniquePhrases };

export const phrases: Phrases = {
  ...sharedPhrases,
  ...uniquePhrases,
};
