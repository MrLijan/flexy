<template>
  <input
    type="text"
    v-model="value"
    v-on="listeners"
    :placeholder="placeholder"
    :disabled="disabled"
    class="de-input"
  />
</template>

<script>
export default {
  name: 'DeInput',

  props: {
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      value: null,
    };
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
