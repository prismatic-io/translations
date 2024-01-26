import { ComplexPhrase, SimplePhrase } from "../../types";

export interface DateTimePhrases {
  /** English: "Max duration cannot exceed %{max} %{timeMeasurement}" */
  "datetime.validatonError": ComplexPhrase<{
    max: number;
    timeMeasurement: "Hours" | "Minutes" | "Seconds";
  }>;

  /** English: "Hours" */
  "datetime.timeMeasurement.hours": SimplePhrase;

  /** English: "Minutes" */
  "datetime.timeMeasurement.minutes": SimplePhrase;

  /** English: "Seconds" */
  "datetime.timeMeasurement.seconds": SimplePhrase;

  /** English: "Surrounding" */
  "datetime.range.surrounding": SimplePhrase;

  /** English: "After" */
  "datetime.range.after": SimplePhrase;

  /** English: "Between" */
  "datetime.range.between": SimplePhrase;

  /** English: "Cancel" */
  "datetime.cancelButtonText": SimplePhrase;

  /** English: "Save" */
  "datetime.saveButtonText": SimplePhrase;

  /** English: "Past 15 Minutes" */
  "datetime.preset.past15Minutes": SimplePhrase;

  /** English: "Past Hour" */
  "datetime.preset.pastHour": SimplePhrase;

  /** English: "Past 24 Hours" */
  "datetime.preset.past24Hours": SimplePhrase;

  /** English: "Time Range" */
  "datetime.timeRange": SimplePhrase;

  /** English: "Custom" */
  "datetime.preset.custom": SimplePhrase;

  /** English: "Dynamic Time Range" */
  "datetime.dynamicTimeRange": SimplePhrase;
}
export const dateTimePhrases: DateTimePhrases = {
  "datetime.validatonError": {
    _: "Max duration cannot exceed %{max} %{timeMeasurement}",
    max: 60,
    timeMeasurement: "Hours",
  },
  "datetime.timeMeasurement.hours": "Hours",
  "datetime.timeMeasurement.minutes": "Minutes",
  "datetime.timeMeasurement.seconds": "Seconds",
  "datetime.range.surrounding": "Surrounding",
  "datetime.range.after": "After",
  "datetime.range.between": "Between",
  "datetime.cancelButtonText": "Cancel",
  "datetime.saveButtonText": "Save",
  "datetime.preset.past15Minutes": "Past 15 Minutes",
  "datetime.preset.pastHour": "Past Hour",
  "datetime.preset.past24Hours": "Past 24 Hours",
  "datetime.timeRange": "Time Range",
  "datetime.preset.custom": "Custom",
  "datetime.dynamicTimeRange": "Dynamic Time Range",
};
