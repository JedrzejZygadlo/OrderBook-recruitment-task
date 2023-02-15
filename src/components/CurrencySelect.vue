<template>
  <div class="currency-select-container">
    <h3 v-if="isSelectText" class="currency-select-header">{{ selectText }}</h3>
    <Swiper
      class="currency-select-swiper"
      :currenciesToDisplay="currenciesToDisplay"
      :currencySection="currencySection"
    />
    <div class="currency-select-mobile-container">
      <CurrencyTileView
        class="currency-tile"
        v-for="currency in currenciesToDisplay"
        :key="currency.name"
        :currency="currency"
        :currencySection="currencySection"
        @click="setCurrency(currency.shortcut)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, computed, Ref } from "vue";
import CurrencyTileView from "./CurrencyTile.vue";
import {
  CurrencyTile,
  CurrencySection,
  CurrencySelectProps,
  CurrencySelectHeader,
  ChangeCurrencyFunction,
} from "../types";
import Swiper from "./Swiper.vue";

export default defineComponent({
  name: "CurrencySelect",
  components: {
    CurrencyTileView,
    Swiper,
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
  setup(props: CurrencySelectProps) {
    const currentCurrencyPair = inject<Ref<string>>(
      "currentCurrencyPair",
      computed(() => "BTC/PLN")
    );

    const changeCurrency = inject("changeCurrency") as ChangeCurrencyFunction;

    const setCurrency = (shortcut: string): void =>
      changeCurrency(props.currencySection, shortcut);

    const isBaseCurrencySection = computed<boolean>(
      () => props.currencySection === CurrencySection.BASE
    );

    const isCryptoCurrencySection = computed<boolean>(
      () => props.currencySection === CurrencySection.CRYPTO
    );

    const isSelectText = computed<boolean>(
      () => isBaseCurrencySection.value || isCryptoCurrencySection.value
    );

    const selectText = computed<string>(() => {
      if (isBaseCurrencySection.value)
        return CurrencySelectHeader.BASE_CURRENCY_HEADER;
      else if (isCryptoCurrencySection.value)
        return CurrencySelectHeader.CRYPTO_CURRENCY_HEADER;
      return CurrencySelectHeader.DEFAULT_CURRENCY_HEADER;
    });

    return {
      currentCurrencyPair,
      changeCurrency,
      setCurrency,
      isSelectText,
      selectText,
      isBaseCurrencySection,
      isCryptoCurrencySection,
    };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.currency-select-container {
  margin: $spacing-4;
  padding: $spacing-4 $spacing-3;
  border-radius: 20px;
  box-shadow: $box-shadow;
  .currency-select-header {
    margin: 0 auto $spacing-4 auto;
    @include tablet {
      font-size: $sm;
    }
    @include desktop {
      font-size: $xl;
    }
  }
  .currency-select-swiper {
    display: none;
    @include tabletAndDesktop {
      display: block;
    }
  }
  .currency-select-mobile-container {
    @include tabletAndDesktop {
      display: none;
    }
  }
}
</style>
