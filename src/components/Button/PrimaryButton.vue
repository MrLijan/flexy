<template>
  <button @click="logSome" class="primary-button">
    <!-- ICON -->

    <base-icon v-if="icon" :src="icon"></base-icon>

    <!-- TEXT -->
    <slot />
  </button>
</template>

<script>
import BaseButton from '@/components/Button/BaseButton.vue';

export default {
  extends: BaseButton,
};
</script>

<style lang="scss" scoped>
.primary-button {
  display: inline-flex;
  padding: 8px 10px;
  border-radius: 4px;
  border: none;

  background: var(--app-blue);
  color: var(--app-white);

  font-weight: 600;
  cursor: pointer;
  align-items: center;

  :nth-child(1) {
    margin-right: 5px;
  }
}
</style>
