import type { SimplePhrase } from "../../types";

export interface NullStatePhrases {
  /** English: "You don't have permissions to view this page" */
  "nullState.permissionDenied.message": SimplePhrase;
}

export const nullStatePhrases: NullStatePhrases = {
  "nullState.permissionDenied.message":
    "You don't have permissions to view this page",
};
