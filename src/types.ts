import { SharedPhrases } from "./lib/shared";
import { UniquePhrases } from "./lib/unique";

// When adding a new namespace, update BOTH the enum AND NamespacedSharedPhrases below.
export enum Namespace {
  COMPONENTS = "components",
  DASHBOARD = "dashboard",
  INTEGRATIONS = "integrations",
  MARKETPLACE = "integration-marketplace",
  MARKETPLACE_INTEGRATION_ALERT_MONITORS = "integrations.id.alert-monitors",
  MARKETPLACE_INTEGRATION_CONFIGURATION = "integrations.id.configurations",
  MARKETPLACE_INTEGRATION_EXECUTIONS = "integrations.id.executions",
  MARKETPLACE_INTEGRATION_LOGS = "integrations.id.logs",
  MARKETPLACE_INTEGRATION_SUMMARY = "integrations.id",
  MARKETPLACE_INTEGRATION_TEST = "integrations.id.test",
  MARKETPLACE_NOT_FOUND = "app.marketplace-not-found",
}

type NamespacedAs<N extends string> = {
  [K in keyof SharedPhrases as `${N}__${string & K}`]: SharedPhrases[K];
};

// Each entry must correspond to a Namespace enum value above.
export interface NamespacedSharedPhrases
  extends NamespacedAs<Namespace.COMPONENTS>,
    NamespacedAs<Namespace.DASHBOARD>,
    NamespacedAs<Namespace.INTEGRATIONS>,
    NamespacedAs<Namespace.MARKETPLACE>,
    NamespacedAs<Namespace.MARKETPLACE_INTEGRATION_ALERT_MONITORS>,
    NamespacedAs<Namespace.MARKETPLACE_INTEGRATION_CONFIGURATION>,
    NamespacedAs<Namespace.MARKETPLACE_INTEGRATION_EXECUTIONS>,
    NamespacedAs<Namespace.MARKETPLACE_INTEGRATION_LOGS>,
    NamespacedAs<Namespace.MARKETPLACE_INTEGRATION_SUMMARY>,
    NamespacedAs<Namespace.MARKETPLACE_INTEGRATION_TEST>,
    NamespacedAs<Namespace.MARKETPLACE_NOT_FOUND> {}

export type ComplexPhrase<
  T extends Record<string, string | boolean | number> = Record<
    string,
    string | boolean | number
  >
> = T & {
  _?: string;
};

export type ComplexPhrases = PickByType<Phrases, ComplexPhrase>;

export type SimplePhrase = string;

export type SimplePhrases = PickByType<Phrases, SimplePhrase>;

export type DynamicPhrases = {
  dynamicPhrase: { [x: string]: string };
};

export type SharedAndUniquePhrases = SharedPhrases &
  UniquePhrases &
  DynamicPhrases;

export type NamespacedSharedAndSharedAndUniquePhrases =
  Partial<NamespacedSharedPhrases> & SharedAndUniquePhrases;

export type NamespacedSharedAndUniquePhrases<
  T extends unknown = UniquePhrases
> = Partial<NamespacedSharedPhrases> & T;

export type Phrases = Partial<NamespacedSharedAndSharedAndUniquePhrases>;

export type Phrase = keyof SharedAndUniquePhrases;

export type PhraseWithNamespace =
  keyof NamespacedSharedAndSharedAndUniquePhrases;

export type PickByType<T, V> = {
  [P in keyof T as T[P] extends V | undefined ? P : never]: T[P];
};

export { SharedPhrases, UniquePhrases };
