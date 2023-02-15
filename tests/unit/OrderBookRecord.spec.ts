import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import OrderBookRecord from "@/components/OrderBookRecord.vue";
import { OrderData } from "@/types";

describe("Test OrderBookRecord.vue component", () => {
  it("Test 1: total value calculation", () => {
    const mockedRecordData: OrderData = {
      ra: "100",
      ca: "100",
      sa: "100",
      pa: "100",
      co: 100,
    };
    const wrapper = shallowMount(OrderBookRecord, {
      propsData: { record: mockedRecordData },
    });
    expect(wrapper.vm.totalValue).to.equal(10000);
  });
  it("Test 2: Date record values creation", () => {
    const mockedRecordData: OrderData = {
      ra: "10",
      ca: "11",
      sa: "11",
      pa: "12",
      co: 13,
    };
    const wrapper = shallowMount(OrderBookRecord, {
      propsData: { record: mockedRecordData },
    });
    expect(wrapper.vm.dataRecords).to.have.members([13, 11, 110, 10]);
  });
  it("Test 2: Date record values creation with fixed to 6 place after ,", () => {
    const mockedRecordData: OrderData = {
      ra: "100.123",
      ca: "100.456",
      sa: "100",
      pa: "100",
      co: 100,
    };
    const wrapper = shallowMount(OrderBookRecord, {
      propsData: { record: mockedRecordData },
    });
    expect(wrapper.vm.dataRecords).to.have.members([
      100.123, 100.456, 10057.956088, 100,
    ]);
  });
});
