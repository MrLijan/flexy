<template>
  <div class="de-input">
    <label v-if="label" for="input" class="label">{{ label }}</label>
    <div class="field-wrapper">
      <input
        type="text"
        v-model="value"
        v-on="listeners"
        :placeholder="placeholder"
        :disabled="disabled"
      />
    </div>
    <label class="message" for="input" v-if="message">
      {{ message }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'DeInput',

  props: {
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: null,
      required: false,
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
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Input.scss';
</style>
