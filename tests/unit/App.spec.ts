import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("Test App.vue component", () => {
  it("Test 1: Initial currencies values", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.currentBaseCurrency).to.equal("PLN");
    expect(wrapper.vm.currentCryptoCurrency).to.equal("BTC");
    expect(wrapper.vm.currentCurrencyPair).to.equal("BTC-PLN");
  });

  it("Test 2: Change base currency", () => {
    const wrapper = shallowMount(App);
    wrapper.vm.changeCurrency("base", "EUR");
    expect(wrapper.vm.currentBaseCurrency).to.equal("EUR");
    expect(wrapper.vm.currentCryptoCurrency).to.equal("BTC");
    expect(wrapper.vm.currentCurrencyPair).to.equal("BTC-EUR");
  });

  it("Test 3: Change crypto currency", () => {
    const wrapper = shallowMount(App);
    wrapper.vm.changeCurrency("crypto", "ETH");
    expect(wrapper.vm.currentCryptoCurrency).to.equal("ETH");
    expect(wrapper.vm.currentBaseCurrency).to.equal("PLN");
    expect(wrapper.vm.currentCurrencyPair).to.equal("ETH-PLN");
  });

  it("Test 4: Incorrect currencyType -> values shouldn't change from initials", () => {
    const wrapper = shallowMount(App);
    wrapper.vm.changeCurrency("kryptokurency", "ETH");
    expect(wrapper.vm.currentCryptoCurrency).to.equal("BTC");
    expect(wrapper.vm.currentBaseCurrency).to.equal("PLN");
    expect(wrapper.vm.currentCurrencyPair).to.equal("BTC-PLN");
  });
});
