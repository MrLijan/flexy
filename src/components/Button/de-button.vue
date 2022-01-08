<template>
  <!-- Base button -->
  <button @click="clicked" class="base-button" :disabled="disabled">
    <!-- TEXT -->
    <span>
      {{ label }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'DeButton',

  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

    label: {
      type: String,
      required: false,
    },
  },

  methods: {
    clicked() {
      console.log('Click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './_button.scss';
</style>
