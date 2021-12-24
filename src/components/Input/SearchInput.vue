<template>
  <div class="search-input">
    <label v-if="label" for="input">{{ label }}</label>
    <div class="field-wrapper">
      <input
        type="text"
        v-model="value"
        @input="$emit('type', value)"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <base-icon class="icon" src="search" stroke="#012"></base-icon>
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput.vue';
import BaseIcon from '../Icon/BaseIcon.vue';

export default {
  extends: TextInput,
  components: {
    BaseIcon,
  },
};
</script>

<style lang="scss" scoped>
@import './Input.scss';
</style>
