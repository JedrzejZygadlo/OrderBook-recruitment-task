import { expect } from "chai";
import { takeCurrencyNameFromShortcut } from "@/currencies";

describe("Test currencies helpers", () => {
  it("Test 1: takeCurrencyNameFromShortcut method", () => {
    expect(takeCurrencyNameFromShortcut("BTC")).to.equal("Bitcoin");
  });
  it("Test 2: takeCurrencyNameFromShortcut method", () => {
    expect(takeCurrencyNameFromShortcut("EUR")).to.equal("EUR");
  });
});
