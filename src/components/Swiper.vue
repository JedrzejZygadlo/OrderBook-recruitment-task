<template>
  <div>
    <swiper
      :slides-per-view="7"
      :space-between="20"
      :breakpoints="swiperOptions.breakpoints"
      :navigation="swiperOptions.navigation"
    >
      <swiper-slide v-for="currency in finalCurrencies" :key="currency.name"
        ><CurrencyTileView
          :currency="currency"
          :currencySection="currencySection"
          @click="setCurrency(currency.shortcut)"
      /></swiper-slide>
    </swiper>
    <div class="swiper-button-prev" :class="prevElementClassUnique"></div>
    <div class="swiper-button-next" :class="nextElementClassUnique"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType, computed, Ref } from "vue";
import CurrencyTileView from "./CurrencyTile.vue";
import { Swiper } from "swiper/vue/swiper";
import { SwiperSlide } from "swiper/vue/swiper-slide";
import SwiperCore, { Navigation } from "swiper";
import {
  CurrencyTile,
  CurrencySection,
  CurrencySelectProps,
  ChangeCurrencyFunction,
} from "../types";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";

SwiperCore.use([Navigation]);

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
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
  setup(props: CurrencySelectProps) {
    const swiperOptions = {
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },

        1024: {
          slidesPerView: 7,
          spaceBetween: 15,
        },
      },
      navigation: {
        nextEl: `.swiper-button-next-${props.currencySection}`,
        prevEl: `.swiper-button-prev-${props.currencySection}`,
      },
    };

    const currentCurrencyPair = inject<Ref<string>>(
      "currentCurrencyPair",
      computed(() => "BTC/PLN")
    );

    const currentBaseCurrency = inject<Ref<string>>(
      "currentBaseCurrency",
      computed(() => "PLN")
    );

    const prevElementClassUnique = computed<string>(
      () => `swiper-button-prev-${props.currencySection}`
    );

    const nextElementClassUnique = computed<string>(
      () => `swiper-button-next-${props.currencySection}`
    );

    const changeCurrency = inject("changeCurrency") as ChangeCurrencyFunction;

    const setCurrency = (shortcut: string): void =>
      changeCurrency(props.currencySection, shortcut);

    const isCryptoCurrencySection = computed<boolean>(
      () => props.currencySection === CurrencySection.CRYPTO
    );

    const filteredCurrencies = computed<CurrencyTile[]>(() => {
      return props.currenciesToDisplay.filter(
        (currency) =>
          currency.shortcut !== currentBaseCurrency?.value &&
          currency.availableOnMarkets?.indexOf(
            currentBaseCurrency?.value ?? ""
          ) !== -1
      );
    });

    const finalCurrencies = computed<CurrencyTile[]>(() =>
      isCryptoCurrencySection.value
        ? filteredCurrencies.value
        : props.currenciesToDisplay
    );

    return {
      currentCurrencyPair,
      changeCurrency,
      setCurrency,
      swiperOptions,
      prevElementClassUnique,
      nextElementClassUnique,
      isCryptoCurrencySection,
      filteredCurrencies,
      finalCurrencies,
    };
  },
});
</script>

<style scoped lang="scss">
.currency-select-swiper {
  position: relative;
  width: 80%;
  margin: 0 auto;
  .swiper-button-prev-base,
  .swiper-button-prev-crypto {
    left: -80px;
  }
  .swiper-button-next-base,
  .swiper-button-next-crypto {
    right: -80px;
  }
}
</style>
