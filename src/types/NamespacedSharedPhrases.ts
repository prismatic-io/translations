import { Namespace } from "./Namespace";
import { SharedPhrases } from "../lib/shared";

export type NamespacedSharedPhrases<T extends unknown = SharedPhrases> = {
  [K in keyof T as `${Namespace}__${string & K}`]: T[K];
};
