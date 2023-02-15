<template>
  <div class="currency-tile-container" :class="{ selected: isSelected }">
    <SvgIcon
      class="currency-title-svg"
      :name="currency.shortcut"
      :width="32"
      :height="32"
    />
    <span class="currency-tile-name">{{ currency.name }}</span>
    <span v-show="isCryptoCurrencySection" class="currency-tile-shortcut">{{
      finalShortcut
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, PropType, Ref } from "vue";
import SvgIcon from "./SvgIcon.vue";
import { CurrencySection, CurrencyTile, CurrencyTileProps } from "../types";

export default defineComponent({
  name: "CurrencyTileView",
  components: { SvgIcon },
  props: {
    currency: {
      type: Object as PropType<CurrencyTile>,
      required: true,
    },
    currencySection: {
      type: String,
      required: true,
    },
  },
  setup(props: CurrencyTileProps) {
    const currentBaseCurrency = inject<Ref<string>>(
      "currentBaseCurrency",
      computed(() => "PLN")
    );

    const currentCryptoCurrency = inject<Ref<string>>(
      "currentCryptoCurrency",
      computed(() => "BTC")
    );

    const isBaseCurrencySection = computed<boolean>(
      () => props.currencySection === CurrencySection.BASE
    );

    const isCryptoCurrencySection = computed<boolean>(
      () => props.currencySection === CurrencySection.CRYPTO
    );

    const finalShortcut = computed<string>(
      () => `(${props.currency.shortcut})`
    );

    const isSelected = computed<boolean>(
      () =>
        (isBaseCurrencySection.value &&
          currentBaseCurrency?.value === props.currency.shortcut) ||
        (isCryptoCurrencySection.value &&
          currentCryptoCurrency?.value === props.currency.shortcut)
    );

    return {
      finalShortcut,
      isSelected,
      isBaseCurrencySection,
      isCryptoCurrencySection,
    };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
.currency-tile-container {
  @include left-flex-content;
  width: 100%;
  border: 1px solid $black;
  border-radius: 10px;
  padding: $spacing-3 0;
  margin: $spacing-2 0;
  cursor: pointer;
  @include tabletAndDesktop {
    @include centered-flex-content;
    flex-direction: column;
    width: unset;
  }
  .currency-title-svg {
    margin: 0 $spacing-2 0 $spacing-3;
    @include tabletAndDesktop {
      margin: 0 0 $spacing-2 0;
    }
  }
  .currency-tile-name {
    font-size: $sm;
  }
  .currency-tile-shortcut {
    font-size: $sm;
  }
}
.currency-tile-container.selected {
  background: $selected;
}
</style>
