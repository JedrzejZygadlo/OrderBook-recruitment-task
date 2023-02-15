<template>
  <div class="order-book-container">
    <h3 class="order-book-header">Order Book</h3>
    <div class="order-book-spread-container">
      <p class="order-book-spread">Spread value: {{ spread.toFixed(6) }}</p>
      <p class="order-book-spread">
        Spread(%): {{ spredPercentage.toFixed(2) }}%
      </p>
    </div>
    <div class="order-book-columns-wrapper">
      <OrderBookColumn :columnType="'buy'" :column-data="buyOrders" />
      <OrderBookColumn :columnType="'sell'" :column-data="sellOrders" />
    </div>
  </div>
</template>

<script lang="ts">
import { OrderData } from "@/types";
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  inject,
  ref,
  Ref,
  computed,
} from "vue";
import apiClient from "../service";
import OrderBookColumn from "./OrderBookColumn.vue";

export default defineComponent({
  name: "OrderBook",
  components: { OrderBookColumn },
  setup() {
    const buyOrders = ref<Array<OrderData>>([]);
    const sellOrders = ref<Array<OrderData>>([]);
    const interval = ref<number>();
    const spread = ref<number>(0);
    const spredPercentage = ref<number>(0);

    const currentCurrencyPair = inject<Ref<string>>(
      "currentCurrencyPair",
      computed(() => "BTC-PLN")
    );

    const getOrders = () => {
      return apiClient.get(`orderbook-limited/${currentCurrencyPair.value}/10`);
    };

    const invokeInterval = (): void => {
      interval.value = setInterval(() => {
        sendStatsRequest();
      }, 1000);
    };

    onMounted((): void => {
      getOrders();
      invokeInterval();
    });

    onBeforeUnmount(() => clearInterval(interval.value));

    const sendStatsRequest = () => {
      getOrders()
        .then((response) => {
          const { buy, sell } = response.data;
          spread.value = sell[0].ra - buy[0].ra;
          spredPercentage.value = ((sell[0].ra - buy[0].ra) / sell[0].ra) * 100;
          buyOrders.value = [...buy];
          sellOrders.value = [...sell];
        })
        .catch((error) => {
          console.log("error", error);
        });
    };

    return { buyOrders, sellOrders, spread, spredPercentage };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
.order-book-container {
  padding: $spacing-4 $spacing-3;
  border-radius: 20px;
  box-shadow: $box-shadow;
  margin: $spacing-4 0;
  .order-book-header {
    font-size: $xl;
    font-weight: 700;
    margin: $spacing-6 0;
    @include tablet {
      font-size: $xxl;
    }
    @include desktop {
      font-size: $xxxl;
    }
  }
  .order-book-spread-container {
    margin: $spacing-4 0;
    .order-book-spread {
      margin: 0 0 $spacing-2 0;
    }
  }

  .order-book-columns-wrapper {
    @include desktop {
      display: flex;
    }
  }
}
</style>
