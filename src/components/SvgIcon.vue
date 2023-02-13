<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width + 'px'"
    :height="height + 'px'"
    :viewBox="viewBox"
    :aria-label="name"
    role="presentation"
    :class="`${name}-svg`"
  >
    <component :is="dynamicComponent" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, computed } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 16,
      required: true,
    },
    height: {
      type: Number,
      default: 16,
      required: true,
    },
    viewBox: {
      type: String,
      default: "0 0 32 32",
      required: false,
    },
  },
  setup(props) {
    const dynamicComponent = computed(() =>
      defineAsyncComponent(() => import(`./icons/${props.name}.vue`))
    );
    return { dynamicComponent };
  },
});
</script>

<style scoped lang="scss"></style>
