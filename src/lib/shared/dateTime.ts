import { ComplexPhrase, SimplePhrase } from "../../types";

export interface DateTimePhrases {
  /** English: "Max duration cannot exceed %{max} %{timeMeasurement}" */
  "datetime.validatonError": ComplexPhrase<{
    max: number;
    timeMeasurement: "Hours" | "Minutes" | "Seconds";
  }>;

  /** English: "Dynamic Time Range" */
  "datetime.title": SimplePhrase;
}
export const dateTimePhrases: DateTimePhrases = {
  "datetime.validatonError": {
    _: "Max duration cannot exceed %{max} %{timeMeasurement}",
    max: 60,
    timeMeasurement: "Hours",
  },
  "datetime.title": "Dynamic Time Range",
};
