<template>
  <div class="text-input">
    <label v-if="label" for="input">{{ label }}</label>
    <input
      type="text"
      v-model="value"
      @input="$emit('type', value)"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script>
import InputMixin from './InputMixin';

export default {
  mixins: [InputMixin],
};
</script>

<style lang="scss" scoped>
@import './Input.scss';
</style>
