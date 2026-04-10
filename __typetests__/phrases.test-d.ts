import { expectTypeOf } from "expect-type";
import {
  // Core types
  Phrases,
  Phrase,
  PhraseWithNamespace,
  SharedPhrases,
  UniquePhrases,
  SharedAndUniquePhrases,
  DynamicPhrases,
  NamespacedSharedPhrases,
  NamespacedSharedAndSharedAndUniquePhrases,
  NamespacedSharedAndUniquePhrases,
  SimplePhrase,
  SimplePhrases,
  ComplexPhrase,
  ComplexPhrases,
  PickByType,
  Namespace,

  // Runtime values
  sharedPhrases,
  uniquePhrases,
  phrases,

  // Utils
  isSimplePhrase,
  isComplexPhrase,
  getComplexPhase,
} from "../src";

// Individual phrase types are not re-exported from the main barrel;
// import them from their sub-module barrels.
import {
  ChipPhases,
  CommonPhrases,
  ConfigWizardPhrases,
  CustomerConnectionsPhrases,
  DataTablePhrases,
  DateTimePhrases,
  DetailPhrases,
  DialogPhrases,
  ExecutionPhrases,
  FilterPhrases,
  HeaderPhrases,
  InputPhrases,
  LogSeverityPhrases,
  NoResultsPhrases,
  NullStatePhrases,
  OAuthConnectionPhrases,
  PopoverPhrases,
  TabPhrases,
  TooltipPhrases,
  TriggerDetailsPhrases,
  UserPhrases,
  chipPhases,
  commonPhrases,
  configWizardPhrases,
} from "../src/lib/shared";

import {
  NotFoundPhrases,
  AppMarketplaceNotFoundPhrases,
  ComponentsPhrases,
  DashboardPhrases,
  IntegrationMarketplacePhrases,
  IntegrationIdPhrases,
  IntegrationIdAlertMonitorsPhrases,
  IntegrationIdConfigurationsPhrases,
  IntegrationIdExecutionsPhrases,
  IntegrationIdLogsPhrases,
  IntegrationIdTestPhrases,
} from "../src/lib/unique";
import { IntegrationsPhrases } from "../src/lib/unique/integrations";

// ---------------------------------------------------------------------------
// SimplePhrase and ComplexPhrase base types
// ---------------------------------------------------------------------------

expectTypeOf<SimplePhrase>().toBeString();

// ComplexPhrase has an optional _ property and allows string/boolean/number values
expectTypeOf<ComplexPhrase>().toHaveProperty("_");
expectTypeOf<ComplexPhrase["_"]>().toEqualTypeOf<string | undefined>();

// ComplexPhrase with specific params
type TestComplex = ComplexPhrase<{ name: string; count: number }>;
expectTypeOf<TestComplex>().toHaveProperty("_");
expectTypeOf<TestComplex>().toHaveProperty("name");
expectTypeOf<TestComplex>().toHaveProperty("count");

// ---------------------------------------------------------------------------
// SharedPhrases contains all shared phrase interfaces
// ---------------------------------------------------------------------------

expectTypeOf<SharedPhrases>().toMatchTypeOf<ChipPhases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<CommonPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<ConfigWizardPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<CustomerConnectionsPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<DataTablePhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<DateTimePhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<DetailPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<DialogPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<ExecutionPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<FilterPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<HeaderPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<InputPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<LogSeverityPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<NoResultsPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<NullStatePhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<OAuthConnectionPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<PopoverPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<TabPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<TooltipPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<TriggerDetailsPhrases>();
expectTypeOf<SharedPhrases>().toMatchTypeOf<UserPhrases>();

// ---------------------------------------------------------------------------
// UniquePhrases contains all unique phrase interfaces
// ---------------------------------------------------------------------------

expectTypeOf<UniquePhrases>().toMatchTypeOf<NotFoundPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<AppMarketplaceNotFoundPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<ComponentsPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<DashboardPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<IntegrationMarketplacePhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<IntegrationIdPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<IntegrationIdAlertMonitorsPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<IntegrationIdConfigurationsPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<IntegrationIdExecutionsPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<IntegrationIdLogsPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<IntegrationIdTestPhrases>();
expectTypeOf<UniquePhrases>().toMatchTypeOf<IntegrationsPhrases>();

// ---------------------------------------------------------------------------
// SharedAndUniquePhrases = SharedPhrases & UniquePhrases & DynamicPhrases
// ---------------------------------------------------------------------------

expectTypeOf<SharedAndUniquePhrases>().toMatchTypeOf<SharedPhrases>();
expectTypeOf<SharedAndUniquePhrases>().toMatchTypeOf<UniquePhrases>();
expectTypeOf<SharedAndUniquePhrases>().toMatchTypeOf<DynamicPhrases>();

// DynamicPhrases has a dynamicPhrase property
expectTypeOf<DynamicPhrases>().toHaveProperty("dynamicPhrase");
expectTypeOf<DynamicPhrases["dynamicPhrase"]>().toEqualTypeOf<{
  [x: string]: string;
}>();

// ---------------------------------------------------------------------------
// Phrase = keyof SharedAndUniquePhrases
// ---------------------------------------------------------------------------

expectTypeOf<Phrase>().toEqualTypeOf<keyof SharedAndUniquePhrases>();

// Spot-check specific keys are part of Phrase
expectTypeOf<"chip.templateLabel">().toMatchTypeOf<Phrase>();
expectTypeOf<"common.cancelButton">().toMatchTypeOf<Phrase>();
expectTypeOf<"executionDetails.title">().toMatchTypeOf<Phrase>();
expectTypeOf<"dynamicPhrase">().toMatchTypeOf<Phrase>();

// ---------------------------------------------------------------------------
// Namespaced types — NamespacedSharedPhrases maps SharedPhrases keys with
// Namespace__ prefixes. Each namespaced key retains its specific value type.
// ---------------------------------------------------------------------------

// NamespacedSharedPhrases has specific keys with specific value types
const _nspCheck1: NamespacedSharedPhrases["components__chip.templateLabel"] =
  "Template";
const _nspCheck2: NamespacedSharedPhrases["dashboard__common.cancelButton"] =
  "Cancel";
const _nspCheck3: NamespacedSharedPhrases["integrations__executionDetails.title"] =
  "Execution Details";

// PhraseWithNamespace = keyof NamespacedSharedAndSharedAndUniquePhrases
// Includes both namespaced and non-namespaced keys
const _pwnShared: PhraseWithNamespace = "chip.templateLabel";
const _pwnNamespaced: PhraseWithNamespace =
  "components__chip.templateLabel";
const _pwnUnique: PhraseWithNamespace = "404__title";
const _pwnDynamic: PhraseWithNamespace = "dynamicPhrase";

// NamespacedSharedAndUniquePhrases<T> extends T
const _nsupDash: NamespacedSharedAndUniquePhrases<DashboardPhrases> = {
  "dashboard__filterBar.title": "Dashboard",
};

// ---------------------------------------------------------------------------
// Phrases is Partial — all properties optional
// ---------------------------------------------------------------------------

// Empty object is assignable (all optional)
const _emptyPhrases: Phrases = {};

// Valid partial subset
const _partialPhrases: Phrases = {
  "chip.templateLabel": "Template",
  "common.cancelButton": "Cancel",
};

// @ts-expect-error — invalid key should not be assignable
const _badPhrases: Phrases = { notAValidKey: "nope" };

// Phrases contains the shared keys (as optional)
const _phraseChip: Phrases["chip.templateLabel"] = "Template" as
  | string
  | undefined;
const _phraseDynamic: Phrases["dynamicPhrase"] = { key: "val" } as
  | { [x: string]: string }
  | undefined;

// ---------------------------------------------------------------------------
// Value type fidelity — both namespaced and non-namespaced keys have specific
// per-key value types. Simple phrase keys resolve to string, complex phrase
// keys resolve to their specific ComplexPhrase parameterization.
// ---------------------------------------------------------------------------

// Helper: Expect<true> errors if the condition is false
type Expect<T extends true> = T;

// --- Non-namespaced keys retain specific per-key types ---

// Simple phrase accessed through Phrases: string | undefined
type PhrasesSimpleValue = Phrases["chip.templateLabel"];
type _CheckSimple = Expect<PhrasesSimpleValue extends string | undefined ? true : false>;
const _phraseSimpleAssign: PhrasesSimpleValue = "hello";
// @ts-expect-error — ComplexPhrase is NOT assignable to a simple key's value type
const _phraseSimpleBadAssign: PhrasesSimpleValue = { _: "hello", value: "x" };

// Complex phrase accessed through Phrases: retains specific shape
type PhrasesComplexValue = Phrases["configWizard.triggerDetails.schedule.configVariable"];
type _CheckComplex = Expect<
  PhrasesComplexValue extends ComplexPhrase<{ value: string }> | undefined ? true : false
>;

// --- Namespaced keys also retain per-key types ---

type NSPPartial = Partial<NamespacedSharedPhrases>;
type NamespacedSimpleValue = NSPPartial["components__chip.templateLabel"];
type NamespacedComplexValue = NSPPartial["components__configWizard.triggerDetails.schedule.configVariable"];

// Simple namespaced key: string | undefined
type _CheckNSString = Expect<NamespacedSimpleValue extends string | undefined ? true : false>;
const _nsSimpleAssign: NamespacedSimpleValue = "hello";
// @ts-expect-error — ComplexPhrase is NOT assignable to a simple namespaced key
const _nsSimpleBadAssign: NamespacedSimpleValue = { _: "hello", value: "x" } as ComplexPhrase<{ value: string }>;

// Complex namespaced key retains its specific shape
type _CheckNSComplexSpecific = Expect<
  NamespacedComplexValue extends ComplexPhrase<{ value: string }> | undefined ? true : false
>;

// ---------------------------------------------------------------------------
// PickByType correctly filters phrase types
// ---------------------------------------------------------------------------

type TestObj = { a: string; b: number; c: string };
type PickedStrings = PickByType<TestObj, string>;
expectTypeOf<PickedStrings>().toEqualTypeOf<{ a: string; c: string }>();

// SimplePhrases and ComplexPhrases are derived via PickByType over Phrases.
// Verify they're importable and have the expected value types via assignment.
const _simpleVal: SimplePhrases[keyof SimplePhrases] = "hello";
// @ts-expect-error — number is not a SimplePhrase value
const _simpleBad: SimplePhrases[keyof SimplePhrases] = 42;

// ---------------------------------------------------------------------------
// Namespace enum values
// ---------------------------------------------------------------------------

const _nsComponents: "components" = Namespace.COMPONENTS;
const _nsDashboard: "dashboard" = Namespace.DASHBOARD;
const _nsIntegrations: "integrations" = Namespace.INTEGRATIONS;
const _nsMarketplace: "integration-marketplace" = Namespace.MARKETPLACE;
const _nsAlertMonitors: "integrations.id.alert-monitors" =
  Namespace.MARKETPLACE_INTEGRATION_ALERT_MONITORS;
const _nsConfig: "integrations.id.configurations" =
  Namespace.MARKETPLACE_INTEGRATION_CONFIGURATION;
const _nsExec: "integrations.id.executions" =
  Namespace.MARKETPLACE_INTEGRATION_EXECUTIONS;
const _nsLogs: "integrations.id.logs" =
  Namespace.MARKETPLACE_INTEGRATION_LOGS;
const _nsSummary: "integrations.id" =
  Namespace.MARKETPLACE_INTEGRATION_SUMMARY;
const _nsTest: "integrations.id.test" =
  Namespace.MARKETPLACE_INTEGRATION_TEST;
const _nsNotFound: "app.marketplace-not-found" =
  Namespace.MARKETPLACE_NOT_FOUND;

// ---------------------------------------------------------------------------
// Runtime values have correct types
// ---------------------------------------------------------------------------

expectTypeOf(sharedPhrases).toEqualTypeOf<SharedPhrases>();
expectTypeOf(uniquePhrases).toEqualTypeOf<UniquePhrases>();
expectTypeOf(chipPhases).toEqualTypeOf<ChipPhases>();
expectTypeOf(commonPhrases).toEqualTypeOf<CommonPhrases>();
expectTypeOf(configWizardPhrases).toEqualTypeOf<ConfigWizardPhrases>();

// phrases is typed as Phrases — use assignment test to avoid namespace explosion
const _phrasesVal: Phrases = phrases;

// ---------------------------------------------------------------------------
// Specific phrase key/value types (spot checks)
// ---------------------------------------------------------------------------

// Simple phrase keys resolve to string
expectTypeOf<ChipPhases["chip.templateLabel"]>().toBeString();
expectTypeOf<CommonPhrases["common.cancelButton"]>().toBeString();
expectTypeOf<ExecutionPhrases["executionDetails.title"]>().toBeString();

// ComplexPhrase keys have the _ property
expectTypeOf<
  ConfigWizardPhrases["configWizard.triggerDetails.schedule.configVariable"]
>().toHaveProperty("_");
expectTypeOf<
  ConfigWizardPhrases["configWizard.triggerDetails.schedule.configVariable"]
>().toHaveProperty("value");

// ---------------------------------------------------------------------------
// Utility functions have correct signatures
// ---------------------------------------------------------------------------

// isSimplePhrase is a type guard returning boolean
const _guardResult: boolean = isSimplePhrase("test");

// isComplexPhrase returns boolean
const _complexGuardResult: boolean = isComplexPhrase("test");

// getComplexPhase takes a ComplexPhrase and returns string
const _complexResult: string = getComplexPhase({ _: "hello" });
