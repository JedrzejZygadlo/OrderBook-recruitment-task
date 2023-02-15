import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import OrderBookColumn from "@/components/OrderBookColumn.vue";
import { OperationText } from "@/types";

describe("Test OrderBookColumn.vue component", () => {
  it("Test 1: operationName test => buy case", () => {
    const mockedColumnData = [
      {
        ra: "100",
        ca: "100",
        sa: "100",
        pa: "100",
        co: 100,
      },
    ];
    const wrapper = shallowMount(OrderBookColumn, {
      propsData: {
        columnData: mockedColumnData,
        columnType: "buy",
      },
    });
    expect(wrapper.find(".order-book-column-header").text()).to.equal(
      OperationText.BUY
    );
  });
  it("Test 2: operationName test => sell case", () => {
    const mockedColumnData = [
      {
        ra: "100",
        ca: "100",
        sa: "100",
        pa: "100",
        co: 100,
      },
    ];
    const wrapper = shallowMount(OrderBookColumn, {
      propsData: {
        columnData: mockedColumnData,
        columnType: "sell",
      },
    });
    expect(wrapper.find(".order-book-column-header").text()).to.equal(
      OperationText.SELL
    );
  });
});
