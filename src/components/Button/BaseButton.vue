<template>
  <button @click="logSome" class="base-button">
    <!-- ICON -->

    <base-icon v-if="icon" :src="icon"></base-icon>

    <!-- TEXT -->
    <slot />
  </button>
</template>

<script>
import BaseIcon from '../Icon/BaseIcon.vue';

export default {
  name: 'BaseButton',

  components: {
    BaseIcon,
  },

  props: {
    text: {
      type: String,
    },

    icon: {
      type: String,
      required: false,
    },
  },

  data() {
    return {};
  },

  methods: {
    logSome() {
      console.log('Button Clicked');
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  display: inline-flex;
  padding: 8px 10px;
  border-radius: 4px;
  border: none;

  font-weight: 600;
  cursor: pointer;
  align-items: center;

  :nth-child(1) {
    margin-right: 5px;
  }
}
</style>
