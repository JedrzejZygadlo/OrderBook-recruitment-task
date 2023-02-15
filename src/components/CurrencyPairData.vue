<template>
  <div class="currency-data-container">
    <CurrencyPairStats />
    <OrderBook />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrencyPairStats from "./CurrencyPairStats.vue";
import OrderBook from "./OrderBook.vue";

export default defineComponent({
  name: "CurrencyPairData",
  components: {
    CurrencyPairStats,
    OrderBook,
  },
});
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
.currency-data-container {
  margin: $spacing-4;
}
</style>
