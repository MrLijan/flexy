<template>
  <div class="primary-button">
    <button>
      <!-- text -->
      <slot />

      <!-- icon -->

      <base-icon v-show="icon" :src="icon" class="icon"></base-icon>
    </button>
  </div>
</template>

<script>
import BaseButton from '@/components/Button/BaseButton.vue';

export default {
  extends: BaseButton,
  data() {
    return {
      isHover: false,
    };
  },

  computed: {
    stateHover() {
      return this.isHover;
    },
  },

  methods: {
    setHover() {
      this.isHover = !this.isHover;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Button.scss';
</style>
