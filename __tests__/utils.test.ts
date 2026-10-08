import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  getComplexPhase,
  isComplexPhrase,
  isSimplePhrase,
} from "../src/utils.ts";

describe("getComplexPhase", () => {
  it("replaces a placeholder with its value", () => {
    assert.equal(
      getComplexPhase({ _: "Hello %{name}", name: "Katryn" }),
      "Hello Katryn",
    );
  });

  it("replaces every occurrence of a repeated placeholder", () => {
    assert.equal(
      getComplexPhase({
        _: "Showing %{limit} of %{total}. Replay up to %{limit} at a time.",
        limit: 100,
        total: 250,
      }),
      "Showing 100 of 250. Replay up to 100 at a time.",
    );
  });

  it("replaces several placeholders", () => {
    assert.equal(
      getComplexPhase({ _: "%{count} of %{total}", count: 3, total: 7 }),
      "3 of 7",
    );
  });

  it("leaves placeholders without a value in place", () => {
    assert.equal(
      getComplexPhase({ _: "Hello %{name}, %{greeting}", name: "Katryn" }),
      "Hello Katryn, %{greeting}",
    );
  });

  it("returns an empty string when the phrase has no template", () => {
    assert.equal(getComplexPhase({ name: "Katryn" }), "");
  });
});

describe("isSimplePhrase", () => {
  it("is true for a string", () => {
    assert.equal(isSimplePhrase("Hello"), true);
  });

  it("is false for an object", () => {
    assert.equal(isSimplePhrase({ _: "Hello" }), false);
  });
});

describe("isComplexPhrase", () => {
  it("is true for an object", () => {
    assert.equal(isComplexPhrase({ _: "Hello" }), true);
  });

  it("is false for a string", () => {
    assert.equal(isComplexPhrase("Hello"), false);
  });
});
