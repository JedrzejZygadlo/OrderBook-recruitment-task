import { expect } from "chai";
import { shallowMount, mount } from "@vue/test-utils";
import CurrencyPairStats from "@/components/CurrencyPairStats.vue";

describe("Test CurrencyPairStats.vue component", () => {
  it("Test 1: Properties test", () => {
    const wrapper = shallowMount(CurrencyPairStats);
    expect(wrapper.vm.min24).to.equal(0);
    expect(wrapper.vm.max24).to.equal(0);
    expect(wrapper.vm.volume).to.equal(0);
    expect(wrapper.vm.rate).to.equal(0);
  });
});
