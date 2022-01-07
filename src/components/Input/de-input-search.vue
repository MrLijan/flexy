<template>
  <div class="search-input">
    <label v-if="label" for="input">{{ label }}</label>
    <div class="field-wrapper">
      <input
        type="text"
        v-model="value"
        v-on="listeners"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <base-icon v-if="icon" class="icon" src="search" stroke="#012" />
    </div>
  </div>
</template>

<script>
import DeInput from './de-input.vue';
import BaseIcon from '../Icon/BaseIcon.vue';

export default {
  name: 'DeInputSearch',
  extends: DeInput,
  components: {
    BaseIcon,
  },

  props: {
    label: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (e) => {
          this.$emit('input', e.target.value);
        },
        focus: () => {
          this.$emit('focus');
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Input.scss';
</style>
