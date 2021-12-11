<template>
  <input type="text" v-model="value" :placeholder="placeholder" @input="log(value)" />
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
