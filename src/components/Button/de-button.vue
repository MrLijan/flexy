<template>
  <button @click="clicked" class="base-button">
    <!-- ICON -->
    <slot name="icon" v-if="icon"></slot>

    <!-- TEXT -->
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'DeButton',

  props: {
    active: {
      type: Boolean,
      required: false,
      default: false,
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    icon: {
      type: Boolean,
      default: false,
      required: false,
    },
  },

  methods: {
    clicked() {
      this.$emit('clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './_button.scss';
</style>
