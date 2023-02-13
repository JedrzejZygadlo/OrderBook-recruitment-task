<template>
  <div class="currency-pair-choice-container">
    <h2>Choose currency pair</h2>
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
import { defineComponent, ref, computed } from "vue";
import CurrencySelect from "./CurrencySelect.vue";
import { baseCurrencies, cryptoCurrencies } from "../currencies";
import type { Ref } from "vue";
import { CurrencySection } from "../types";

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
