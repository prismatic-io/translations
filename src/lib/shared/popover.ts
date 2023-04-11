import { ComplexPhrase, SimplePhrase } from "../../types";

export interface PopoverPhrases {
  /** English: "Version %{versionNumber}" */
  "versionHistorySavePublishPopover.title": ComplexPhrase<{
    versionNumber?: number;
  }>;

  /** English: "Save & Publish" */
  "versionHistorySavePublishPopover.saveButton": SimplePhrase;

  /** English: "Save & Publish" */
  "versionHistorySavePublishPopover.openButton": SimplePhrase;
}

export const popoverPhrases: PopoverPhrases = {
  // version history save publish popover
  "versionHistorySavePublishPopover.title": { _: "Version %{versionNumber}" },
  "versionHistorySavePublishPopover.saveButton": "Save & Publish",
  "versionHistorySavePublishPopover.openButton": "Save & Publish",
};
