import { NamespacedSharedAndUniquePhrases, SimplePhrase } from "../../types";

export interface AppMarketplaceNotFoundPhrases {
  /** English: "Not Found" */
  "app.marketplace-not-found__title": SimplePhrase;

  /** English: "The page you requested was not found." */
  "app.marketplace-not-found__text": SimplePhrase;
}

export const appMarketplaceNotFoundPhrases: NamespacedSharedAndUniquePhrases<AppMarketplaceNotFoundPhrases> =
  {
    "app.marketplace-not-found__text": "The page you requested was not found.",
    "app.marketplace-not-found__title": "Not Found",
  };
