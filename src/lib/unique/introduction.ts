import {
  ComplexPhrase,
  NamespacedSharedAndUniquePhrases,
  SimplePhrase,
} from "../../types";

export interface IntroductionPhrases {
  /** Enlglish: Welcome back, %name! */
  "introduction.welcomeBack": ComplexPhrase<{ name: string }>;

  /** English: Explore these quickstarts to do more with Prismatic */
  "introduction.helperTextTitle": SimplePhrase;

  /** English: Learn More */
  "introduction.linkTitle": SimplePhrase;

  /** English: Uncleared alert monitors */
  "introduction.unclearedAlertMonitors": SimplePhrase;

  /** English: Deployed instances */
  "introduction.deployedInstances": SimplePhrase;

  /** English: Customize */
  "introduction.filterAction.customizeText": SimplePhrase;

  /** English: Customize View */
  "introduction.filterAction.customizeTitle": SimplePhrase;

  /** English: Select the data points that you would like to display. */
  "introduction.filterAction.customizeDescription": SimplePhrase;

  /** English: Want to see more options to display? Let us know. */
  "introduction.filterAction.customizeFeedback": SimplePhrase;

  /** English: Send Feedback */
  "introduction.filterAction.customizeFeedbackLink": SimplePhrase;

  /** English: Get started with Prismatic */
  "introduction.getStarted": SimplePhrase;
}

export const introductionPhrases: NamespacedSharedAndUniquePhrases<IntroductionPhrases> =
  {
    "introduction.welcomeBack": {
      name: "Welcome back, %{name}!",
    },
    "introduction.helperTextTitle":
      "Explore these quickstarts to do more with Prismatic",
    "introduction.linkTitle": "Learn More",
    "introduction.unclearedAlertMonitors": "Uncleared alert monitors",
    "introduction.deployedInstances": "Deployed instances",
    "introduction.filterAction.customizeText": "Customize",
    "introduction.filterAction.customizeTitle": "Customize View",
    "introduction.filterAction.customizeDescription":
      "Select the data points that you would like to display.",
    "introduction.filterAction.customizeFeedback":
      "Want to see more options to display? Let us know.",
    "introduction.filterAction.customizeFeedbackLink": "Send Feedback",
    "introduction.getStarted": "Get started with Prismatic",
  };
