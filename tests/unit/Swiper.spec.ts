import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Swiper from "@/components/Swiper.vue";
import { baseCurrencies } from "@/currencies";
import { CurrencyType } from "@/types";

describe("Test Swiper.vue component", () => {
  it("Test 1: No filter base currencies", () => {
    const currenciesToDisplay = baseCurrencies;
    const wrapper = shallowMount(Swiper, {
      propsData: {
        currenciesToDisplay: currenciesToDisplay,
        currencySection: "base",
      },
    });
    expect(wrapper.vm.finalCurrencies.length).to.equal(baseCurrencies.length);
  });
  it("Test 2: Filter crypto currencies", () => {
    const mockedCurrencies = [
      {
        name: "Tether",
        shortcut: "USDT",
        type: CurrencyType.BOTH,
        availableOnMarkets: ["PLN", "EUR", "USD", "GBP"],
      },
      {
        name: "USD Coin",
        shortcut: "USDC",
        type: CurrencyType.BOTH,
        availableOnMarkets: ["EUR", "USD", "GBP", "USDT"],
      },
      {
        name: "Ethereum",
        shortcut: "ETH",
        type: CurrencyType.FIRST,
        availableOnMarkets: ["EUR", "USD", "GBP", "USDT", "BTC", "USDC"],
      },
    ];
    const wrapper = shallowMount(Swiper, {
      propsData: {
        currenciesToDisplay: mockedCurrencies,
        currencySection: "crypto",
      },
    });
    expect(wrapper.vm.finalCurrencies.length).to.equal(1);
  });
});
