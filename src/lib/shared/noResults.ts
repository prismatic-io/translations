import { ComplexPhrase, SimplePhrase } from "../../types";

export interface NoResultsPhrases {
  /** English: "No results" */
  "noResults.title": SimplePhrase;

  /** English: "Your search of "{searchTerm}" returned no results." */
  "noResults.text": ComplexPhrase<{ searchTerm: string }>;
}

export const noResultsPhrases: NoResultsPhrases = {
  "noResults.title": "No results",
  "noResults.text": {
    _: 'Your search of "%{searchTerm}" returned no results.',
    searchTerm: "",
  },
};
