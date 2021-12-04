<template>
  <div>
    <button @click="logSome" class="base-button">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
    },
  },

  data() {
    return {
      x: 'Liram',
    };
  },

  methods: {
    logSome() {
      console.log(this.x);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: inline-block;

  padding: 10px 20px;
  border-radius: 4px;
  border: none;

  font-weight: 600;
  cursor: pointer;
}
</style>
