<template>
  <div class="order-book-column-container">
    <p class="order-book-column-header">{{ operationName }}</p>
    <div class="order-book-column-names-container">
      <span
        class="order-book-column-name"
        v-for="columnName in columnNames"
        :key="columnName"
      >
        {{ columnName }}
      </span>
    </div>
    <OrderBookRecord
      v-for="(record, index) in columnData"
      :key="`record-${index}`"
      :record="record"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import OrderBookRecord from "./OrderBookRecord.vue";
import {
  OrderData,
  BookOrderColumnName,
  ColumnType,
  OperationText,
} from "../types";

export default defineComponent({
  name: "OrderBookColumn",
  components: { OrderBookRecord },
  props: {
    columnData: {
      type: Array as PropType<OrderData[]>,
      required: true,
    },
    columnType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const columnNames = computed<Array<string>>(() =>
      Object.values(BookOrderColumnName)
    );

    const operationName = computed<string>(() => {
      if (props.columnType === ColumnType.BUY) return OperationText.BUY;
      else if (props.columnType === ColumnType.SELL) return OperationText.SELL;
      return OperationText.DEFAULT;
    });

    return { columnNames, operationName };
  },
});
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";
.order-book-column-container {
  @include desktop {
    padding: 0 $spacing-2;
    width: 50%;
  }
  .order-book-column-names-container {
    padding: $spacing-4 0;
    background-color: $lightBlue;
    @include centered-flex-content;
    :first-child {
      display: none;
    }
    @include tabletAndDesktop {
      :first-child {
        display: block;
      }
    }
    .order-book-column-name {
      width: calc(100% / 3);
      font-weight: 700;
      font-size: $xs;
      @include tabletAndDesktop {
        width: 25%;
        font-size: $sm;
      }
    }
  }
  .order-book-column-header {
    font-size: $xs;
    font-weight: 700;
    margin: $spacing-2 0;
    @include tabletAndDesktop {
      font-size: $xl;
    }
  }
}
</style>
