<template>
  <div class="order-book-main-conainter">
    <CurrencyPairChoice />
    <CurrencyPairData />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, computed } from "vue";
import CurrencyPairChoice from "./components/CurrencyPairChoice.vue";
import CurrencyPairData from "./components/CurrencyPairData.vue";
import type { Ref } from "vue";
import { CurrencySection } from "./types";

export default defineComponent({
  name: "App",
  components: {
    CurrencyPairChoice,
    CurrencyPairData,
  },
  setup() {
    let currentBaseCurrency: Ref<string> = ref("PLN");
    let currentCryptoCurrency: Ref<string> = ref("BTC");
    let currentCurrencyPair: Ref<string> = computed(
      () => `${currentCryptoCurrency.value}-${currentBaseCurrency.value}`
    );
    const changeCurrency = (
      currencyType: string,
      newCurrencyValue: string
    ): void => {
      if (currencyType === CurrencySection.BASE) {
        currentBaseCurrency.value = newCurrencyValue;
      } else if (currencyType === CurrencySection.CRYPTO) {
        currentCryptoCurrency.value = newCurrencyValue;
      }
    };

    provide("currentCurrencyPair", currentCurrencyPair);
    provide("changeCurrency", changeCurrency);
    provide("currentBaseCurrency", currentBaseCurrency);
    provide("currentCryptoCurrency", currentCryptoCurrency);
  },
});
</script>

<style lang="scss">
@import "./styles/variables.scss";
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $darkGray;
  max-width: $maxWidth;
  margin: auto;
}
</style>
