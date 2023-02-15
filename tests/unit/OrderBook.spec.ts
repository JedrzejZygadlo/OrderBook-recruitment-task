import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import OrderBook from "@/components/OrderBook.vue";

describe("Test OrderBook.vue component", () => {
  it("Test 1: Properties test", () => {
    const wrapper = shallowMount(OrderBook);
    expect(wrapper.vm.buyOrders).to.be.an("array").that.is.empty;
    expect(wrapper.vm.sellOrders).to.be.an("array").that.is.empty;
    expect(wrapper.vm.spread).to.equal(0);
    expect(wrapper.vm.spreadPercentage).to.equal(0);
  });
});
