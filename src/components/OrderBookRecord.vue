<template>
  <div class="order-book-record-container">
    <span
      class="order-book-record-value"
      v-for="(dataRecord, index) in dataRecords"
      :key="`dataRecord-${index}`"
      >{{ dataRecord }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { OrderData } from "../types";

export default defineComponent({
  name: "OrderBookRecord",
  props: {
    record: {
      type: Object as PropType<OrderData>,
      required: true,
    },
  },
  setup(props) {
    const totalValue = computed<number>(
      () => Number(props.record.ca) * Number(props.record.ra)
    );

    const dataRecords = computed<Array<string | number>>(() => [
      Number(props.record.ra),
      Number(props.record.ca),
      Number(totalValue.value.toFixed(6)),
      props.record.co,
    ]);

    return { dataRecords, totalValue };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
.order-book-record-container {
  @include centered-flex-content;
  padding: $spacing-4 0;
  :last-child {
    display: none;
  }
  @include tabletAndDesktop {
    :last-child {
      display: block;
    }
  }
  .order-book-record-value {
    width: calc(100% / 3);
    font-size: $xs;
    @include tabletAndDesktop {
      width: 25%;
      font-size: $sm;
    }
  }
}
.order-book-record-container:nth-of-type(even) {
  background: $lightGray;
}
</style>
