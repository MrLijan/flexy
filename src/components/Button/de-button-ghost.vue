<template>
  <div class="ghost-button">
    <button @click="clicked">
      <!-- icon -->
      <slot name="icon" v-if="icon"></slot>
      <!-- text -->
      <span>
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
import DeButton from './de-button.vue';

export default {
  name: 'DeButtonGhost',
  extends: DeButton,
};
</script>

<style lang="scss" scoped>
@import './_button.scss';
</style>
