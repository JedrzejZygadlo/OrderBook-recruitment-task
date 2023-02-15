<template>
  <div class="currency-pair-stats-container">
    <p class="current-currency-pair-text">{{ currencyPairFull }}</p>
    <div class="currency-pair-stats-content">
      <div
        class="currency-pair-stats-tile"
        v-for="stat in stats"
        :key="stat.name"
      >
        <span class="currency-pair-stats-property-name">{{ stat.name }}</span>
        <span class="currency-pair-stats-property-value">{{ stat.value }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  onMounted,
  ref,
  Ref,
  watch,
  computed,
  onBeforeUnmount,
} from "vue";
import apiClient from "../service";
import { StatsProperty, Stat } from "../types";
import { takeCurrencyNameFromShortcut } from "../currencies";

export default defineComponent({
  name: "CurrencyPairStats",
  setup() {
    const min24 = ref<number>(0);
    const max24 = ref<number>(0);
    const volume = ref<number>(0);
    const rate = ref<number>(0);
    const interval = ref<number>();

    const currentCurrencyPair = inject<Ref<string>>(
      "currentCurrencyPair",
      computed(() => "BTC-PLN")
    );

    const currentBaseCurrency = inject<Ref<string>>(
      "currentBaseCurrency",
      computed(() => "PLN")
    );

    const currentCryptoCurrency = inject<Ref<string>>(
      "currentCryptoCurrency",
      computed(() => "BTC")
    );

    const getStats = () => {
      return apiClient.get(`/stats/${currentCurrencyPair?.value}`);
    };

    const getTicker = () => {
      return apiClient.get(`/ticker/${currentCurrencyPair?.value}`);
    };

    const invokeInterval = (): void => {
      interval.value = setInterval(() => {
        sendStatsRequest();
      }, 5000);
    };

    onMounted((): void => {
      sendStatsRequest();
      invokeInterval();
    });

    onBeforeUnmount((): void => clearInterval(interval.value));

    if (currentCurrencyPair) {
      watch(currentCurrencyPair, () => {
        sendStatsRequest();
      });
    }

    const sendStatsRequest = (): void => {
      getStats()
        .then((response) => {
          const { stats } = response.data;
          min24.value = stats.l;
          max24.value = stats.h;
          volume.value = stats.v;
        })
        .catch((error) => {
          console.log("error", error);
        });
      getTicker()
        .then((response) => {
          const { ticker } = response.data;
          rate.value = ticker.rate;
        })
        .catch((error) => {
          console.log("error", error);
        });
    };

    const currencyPairFull = computed<string>(() => {
      const baseCurrencyFullName = takeCurrencyNameFromShortcut(
        currentBaseCurrency?.value ?? ""
      );
      const cryptoCurrencyFullName = takeCurrencyNameFromShortcut(
        currentCryptoCurrency?.value ?? ""
      );
      return `${cryptoCurrencyFullName}(${currentCryptoCurrency?.value}) - ${baseCurrencyFullName}`;
    });

    const stats = computed<Array<Stat>>(() => {
      return [
        { name: StatsProperty.RATE, value: rate.value },
        { name: StatsProperty.MIN, value: min24.value },
        { name: StatsProperty.MAX, value: max24.value },
        { name: StatsProperty.VOLUME, value: volume.value },
      ];
    });

    return {
      min24,
      max24,
      volume,
      rate,
      currentCurrencyPair,
      currentBaseCurrency,
      currentCryptoCurrency,
      currencyPairFull,
      stats,
    };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
.currency-pair-stats-container {
  padding: $spacing-4 $spacing-3;
  border-radius: 20px;
  box-shadow: $box-shadow;
  .current-currency-pair-text {
    margin: 0 $spacing-4;
    font-size: $xl;
    font-weight: 700;
    @include tablet {
      font-size: $xxl;
    }
    @include desktop {
      font-size: $xxxl;
      margin-top: $spacing-6;
    }
  }
  .currency-pair-stats-content {
    @include desktop {
      @include centered-flex-content;
      margin: $spacing-6 0;
    }
  }
  .currency-pair-stats-tile {
    @include centered-flex-content;
    flex-direction: column;
    padding: $spacing-3;
    margin: $spacing-2 0;
    border: 1px solid $black;
    border-radius: 20px;
    @include desktop {
      margin: 0 $spacing-2;
      min-width: 180px;
    }
    .currency-pair-stats-property-value {
      font-size: $sm;
      font-weight: 700;
      margin-top: $spacing-1;
      color: $black;
    }
  }
}
</style>
