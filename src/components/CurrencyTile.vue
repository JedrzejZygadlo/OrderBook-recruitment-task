<template>
  <div class="currency-tile-container">
    <SvgIcon :name="currency.shortcut" :width="32" :height="32" />
    <p>{{ currency.name }}</p>
    <p>{{ currency.shortcut }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SvgIcon from "./SvgIcon.vue";

export default defineComponent({
  name: "CurrencyTileView",
  components: { SvgIcon },
  props: {
    currency: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss"></style>
