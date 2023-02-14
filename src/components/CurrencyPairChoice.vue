<template>
  <div class="currency-pair-choice-container">
    <h2 class="currency-pair-header">Choose currency pair</h2>
    <CurrencySelect
      :currencies-to-display="baseCurrencies"
      :currency-section="`base`"
    />
    <CurrencySelect
      :currencies-to-display="cryptoCurrencies"
      :currency-section="`crypto`"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrencySelect from "./CurrencySelect.vue";
import { baseCurrencies, cryptoCurrencies } from "../currencies";

export default defineComponent({
  name: "CurrencyPairChoice",
  components: {
    CurrencySelect,
  },
  setup() {
    return { baseCurrencies, cryptoCurrencies };
  },
});
</script>

<style scoped lang="scss"></style>
