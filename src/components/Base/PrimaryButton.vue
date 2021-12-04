<template>
  <base-button> Primary button </base-button>
</template>

<script>
import BaseButton from '@/components/Base/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },

  extends: BaseButton,
};
</script>

<style lang="scss" scoped>
::v-deep .base-button {
  color: var(--app-white);
  font-weight: 600;
  background: var(--app-blue);
}
</style>
