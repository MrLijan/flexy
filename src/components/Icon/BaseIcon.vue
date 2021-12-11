<template>
  <component :is="src"></component>
</template>

<script>
import add from './add.vue';

export default {
  name: 'icon',

  components: { add },

  props: {
    src: {
      type: String,
      required: true,
      default: 'add',
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .icon-tabler {
  width: 0.9em;
  height: 0.9em;
}
</style>
