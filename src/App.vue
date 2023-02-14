<template>
  <div class="order-book-main-conainter">
    <CurrencyPairChoice />
    <OrderBook />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, computed } from "vue";
import CurrencyPairChoice from "./components/CurrencyPairChoice.vue";
import OrderBook from "./components/OrderBook.vue";
import type { Ref } from "vue";
import { CurrencySection } from "./types";

export default defineComponent({
  name: "App",
  components: {
    CurrencyPairChoice,
    OrderBook,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
