<template>
  <div class="currency-select-container">
    <CurrencyTileView
      v-for="currency in currenciesToDisplay"
      :key="currency.name"
      :currency="currency"
      @click="setCurrency(currency.shortcut)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import CurrencyTileView from "./CurrencyTile.vue";
import { CurrencyTile } from "../types";

export default defineComponent({
  name: "CurrencySelect",
  components: {
    CurrencyTileView,
  },
  props: {
    currenciesToDisplay: {
      type: Array as PropType<CurrencyTile[]>,
      required: true,
    },
    currencySection: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const currentCurrencyPair = inject("currentCurrencyPair") as string;
    const changeCurrency = inject("changeCurrency") as (
      currencyType: string,
      newCurrencyValue: string
    ) => void;
    const setCurrency = (shortcut: string) =>
      changeCurrency(props.currencySection, shortcut);
    return { currentCurrencyPair, changeCurrency, setCurrency };
  },
});
</script>

<style scoped lang="scss"></style>
