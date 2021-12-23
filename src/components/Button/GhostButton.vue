<template>
  <div class="ghost-button">
    <button>
      <!-- icon -->
      <base-icon v-if="icon" :src="icon"></base-icon>
      <!-- text -->
      <slot></slot>
    </button>
  </div>
</template>

<script>
import Button from './Button';
import BaseIcon from '../Icon/BaseIcon.vue';

export default {
  mixins: [Button],
  components: {
    BaseIcon,
  },
};
</script>

<style lang="scss" scoped>
@import './Button.scss';
</style>
