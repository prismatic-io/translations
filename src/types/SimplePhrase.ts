import { Phrases } from "./Phrases";
import { PickByType } from "./PickByType";

export type SimplePhrase = string;

export type SimplePhrases = PickByType<Phrases, SimplePhrase>;
