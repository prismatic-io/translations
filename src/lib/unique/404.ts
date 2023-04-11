import { NamespacedSharedAndUniquePhrases, SimplePhrase } from "../../types";

export interface NotFoundPhrases {
  /** English: "404" */
  "404__title": SimplePhrase;

  /** English: "The page you requested was not found." */
  "404__text": SimplePhrase;

  /** English: "Back to dashboard" */
  "404__button": SimplePhrase;
}

export const notFoundPhrases: NamespacedSharedAndUniquePhrases<NotFoundPhrases> =
  {
    "404__button": "Back to dashboard",
    "404__text": "The page you requested was not found.",
    "404__title": "404",
  };
