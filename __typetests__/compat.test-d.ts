/**
 * Compatibility test — validates that the built .d.ts output works
 * with older TypeScript versions. Run via:
 *   node_modules/typescript-50/bin/tsc --noEmit -p tsconfig.compat.json
 *
 * This imports from dist/ (what consumers actually get from npm).
 */
import {
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
  sharedPhrases,
  uniquePhrases,
} from "../dist";

import { phrases } from "../dist/lib";

// ---------------------------------------------------------------------------
// All exported types are importable and usable
// ---------------------------------------------------------------------------

// SimplePhrase is string
const _simple: SimplePhrase = "hello";

// ComplexPhrase has _ and custom params
const _complex: ComplexPhrase<{ name: string }> = { _: "Hi %{name}", name: "World" };
const _complexDefault: ComplexPhrase = { _: "test", someKey: "val" };

// DynamicPhrases shape
const _dyn: DynamicPhrases = { dynamicPhrase: { key: "val" } };

// Namespace enum is usable
const _ns: Namespace = Namespace.COMPONENTS;
const _nsVal: "components" = Namespace.COMPONENTS;

// ---------------------------------------------------------------------------
// Composite types resolve correctly
// ---------------------------------------------------------------------------

// SharedAndUniquePhrases extends both
const _shared: SharedPhrases = sharedPhrases;
const _unique: UniquePhrases = uniquePhrases;
const _combined: SharedAndUniquePhrases = { ...sharedPhrases, ...uniquePhrases, dynamicPhrase: {} };

// Phrase is a key of SharedAndUniquePhrases
const _phrase: Phrase = "chip.templateLabel";

// ---------------------------------------------------------------------------
// Phrases is fully Partial
// ---------------------------------------------------------------------------

const _empty: Phrases = {};
const _partial: Phrases = { "chip.templateLabel": "Template" };
const _fromPhrases: Phrases = phrases;

// @ts-expect-error — invalid key is rejected
const _bad: Phrases = { notAValidKey: "nope" };

// ---------------------------------------------------------------------------
// Namespaced types are accessible
// ---------------------------------------------------------------------------

// NamespacedSharedPhrases has specific namespaced keys with per-key types
const _nspVal: NamespacedSharedPhrases["components__chip.templateLabel"] = "Template";

// PhraseWithNamespace includes both namespaced and plain keys
const _pwn1: PhraseWithNamespace = "chip.templateLabel";
const _pwn2: PhraseWithNamespace = "components__chip.templateLabel";

// NamespacedSharedAndUniquePhrases works with generic param
const _nsup: NamespacedSharedAndUniquePhrases<{ foo: string }> = { foo: "bar" };

// ---------------------------------------------------------------------------
// PickByType filters correctly
// ---------------------------------------------------------------------------

type TestObj = { a: string; b: number; c: string };
type Picked = PickByType<TestObj, string>;
const _picked: Picked = { a: "x", c: "y" };
// @ts-expect-error — b is number, should be filtered out
const _pickedBad: Picked = { a: "x", b: 1, c: "y" };

// SimplePhrases and ComplexPhrases are usable
const _sv: SimplePhrases[keyof SimplePhrases] = "hello";
