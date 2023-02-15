import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import CurrencyTileView from "@/components/CurrencyTile.vue";
import { baseCurrencies, cryptoCurrencies } from "@/currencies";

describe("Test CurrencyTileView.vue component", () => {
  it("Test 1: Test isBaseCurrencySection and isCryptoCurrencySection for base currencies", () => {
    const currencyToDisplay = baseCurrencies[0];
    const wrapper = shallowMount(CurrencyTileView, {
      propsData: {
        currency: currencyToDisplay,
        currencySection: "base",
      },
    });
    expect(wrapper.vm.isBaseCurrencySection).to.equal(true);
    expect(wrapper.vm.isCryptoCurrencySection).to.equal(false);
  });

  it("Test 2: Test isBaseCurrencySection and isCryptoCurrencySection for crypto currencies", () => {
    const currencyToDisplay = cryptoCurrencies[0];
    const wrapper = shallowMount(CurrencyTileView, {
      propsData: {
        currency: currencyToDisplay,
        currencySection: "crypto",
      },
    });
    expect(wrapper.vm.isBaseCurrencySection).to.equal(false);
    expect(wrapper.vm.isCryptoCurrencySection).to.equal(true);
  });

  it("Test 3: Test 'selected' additional class => true case", () => {
    const currencyToDisplay = baseCurrencies.find(
      (currency) => currency.shortcut === "PLN"
    );
    if (currencyToDisplay) {
      const wrapper = shallowMount(CurrencyTileView, {
        propsData: {
          currency: currencyToDisplay,
          currencySection: "base",
        },
      });
      expect(wrapper.vm.isSelected).to.equal(true);
      expect(wrapper.find(".selected").exists()).to.equal(true);
    }
  });

  it("Test 4: Test 'selected' additional class => false case", () => {
    const currencyToDisplay = baseCurrencies.find(
      (currency) => currency.shortcut === "EUR"
    );
    if (currencyToDisplay) {
      const wrapper = shallowMount(CurrencyTileView, {
        propsData: {
          currency: currencyToDisplay,
          currencySection: "base",
        },
      });
      expect(wrapper.vm.isSelected).to.equal(false);
      expect(wrapper.find(".selected").exists()).to.equal(false);
    }
  });

  it("Test 5: Test finalShortcut", () => {
    const currencyToDisplay = cryptoCurrencies.find(
      (currency) => currency.shortcut === "ETH"
    );
    if (currencyToDisplay) {
      const wrapper = shallowMount(CurrencyTileView, {
        propsData: {
          currency: currencyToDisplay,
          currencySection: "base",
        },
      });
      expect(wrapper.find(".currency-tile-shortcut").text()).to.equal("(ETH)");
    }
  });
});
