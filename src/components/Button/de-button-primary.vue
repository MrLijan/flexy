<template>
  <div class="primary-button">
    <button @click="clicked" :class="fluid ? 'fluid' : ''" :disabled="disabled">
      <!-- text -->
      {{ label }}

      <!-- icon -->
      <div class="icon">
        <base-icon v-if="icon" :src="icon"></base-icon>
      </div>
    </button>
  </div>
</template>

<script>
import BaseIcon from '../Icon/BaseIcon.vue';
import DeButton from './de-button.vue';

export default {
  name: 'DeButtonPrimary',
  extends: DeButton,

  components: { BaseIcon },

  props: {
    fluid: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
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
