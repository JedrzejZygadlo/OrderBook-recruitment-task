import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import CurrencySelect from "@/components/CurrencySelect.vue";
import { baseCurrencies, cryptoCurrencies } from "@/currencies";
import { CurrencySelectHeader } from "@/types";

describe("Test CurrencySelect.vue component", () => {
  it("Test 1: Test isBaseCurrencySection and isCryptoCurrencySection for base currencies", () => {
    const currenciesToDisplay = baseCurrencies;
    const wrapper = shallowMount(CurrencySelect, {
      propsData: {
        currenciesToDisplay: currenciesToDisplay,
        currencySection: "base",
      },
    });
    expect(wrapper.vm.isBaseCurrencySection).to.equal(true);
    expect(wrapper.vm.isCryptoCurrencySection).to.equal(false);
  });

  it("Test 2: Test isBaseCurrencySection and isCryptoCurrencySection for crypto currencies", () => {
    const currenciesToDisplay = cryptoCurrencies;
    const wrapper = shallowMount(CurrencySelect, {
      propsData: {
        currenciesToDisplay: currenciesToDisplay,
        currencySection: "crypto",
      },
    });
    expect(wrapper.vm.isBaseCurrencySection).to.equal(false);
    expect(wrapper.vm.isCryptoCurrencySection).to.equal(true);
  });

  it("Test 3: Test isSelectText and conditional rendering element => true case", () => {
    const currenciesToDisplay = cryptoCurrencies;
    const wrapper = shallowMount(CurrencySelect, {
      propsData: {
        currenciesToDisplay: currenciesToDisplay,
        currencySection: "crypto",
      },
    });
    expect(wrapper.vm.isSelectText).to.equal(true);
    expect(wrapper.find(".currency-select-header").exists()).to.equal(true);
  });

  it("Test 4: Test isSelectText and conditional rendering element => false case", () => {
    const currenciesToDisplay = cryptoCurrencies;
    const wrapper = shallowMount(CurrencySelect, {
      propsData: {
        currenciesToDisplay: currenciesToDisplay,
        currencySection: "kryptokurency",
      },
    });
    expect(wrapper.vm.isSelectText).to.equal(false);
    expect(wrapper.find(".currency-select-header").exists()).to.equal(false);
  });

  it("Test 5: Test selectText in DOM => crypto currency case", () => {
    const currenciesToDisplay = cryptoCurrencies;
    const wrapper = shallowMount(CurrencySelect, {
      propsData: {
        currenciesToDisplay: currenciesToDisplay,
        currencySection: "crypto",
      },
    });
    expect(wrapper.find(".currency-select-header").text()).to.equal(
      CurrencySelectHeader.CRYPTO_CURRENCY_HEADER
    );
  });

  it("Test 6: Test selectText in DOM => base currency case", () => {
    const currenciesToDisplay = cryptoCurrencies;
    const wrapper = shallowMount(CurrencySelect, {
      propsData: {
        currenciesToDisplay: currenciesToDisplay,
        currencySection: "base",
      },
    });
    expect(wrapper.find(".currency-select-header").text()).to.equal(
      CurrencySelectHeader.BASE_CURRENCY_HEADER
    );
  });
});
