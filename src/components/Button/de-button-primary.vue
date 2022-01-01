<template>
  <div class="primary-button">
    <button @click="clicked" :class="fluid ? 'fluid' : ''">
      <!-- text -->
      <span>
        <slot></slot>
      </span>

      <!-- icon -->
      <div class="icon">
        <slot name="icon" v-if="icon"></slot>
      </div>
    </button>
  </div>
</template>

<script>
import DeButton from './de-button.vue';

export default {
  name: 'DeButtonPrimary',
  extends: DeButton,

  props: {
    fluid: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      isHover: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import './_button.scss';
</style>
