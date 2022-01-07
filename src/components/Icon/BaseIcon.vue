<template>
  <keep-alive>
    <component :is="src"></component>
  </keep-alive>
</template>

<script>
import add from './add.vue';
import addCircle from './add-circle.vue';
import arrowRight from './arrow-right.vue';
import search from './search-1.vue';
import discord from './discord.vue';

export default {
  name: 'icon',

  components: {
    add,
    addCircle,
    arrowRight,
    search,
    discord,
  },

  props: {
    src: {
      type: String,
      required: true,
      default: 'add',
    },
    stroke: {
      type: String,
      required: false,
      default: '$app-dark',
    },
    width: {
      type: Number,
      required: false,
      default: 24,
    },
  },

  computed: {
    scssVars() {
      return {
        '--icon-stroke': this.storke,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep > svg {
  stroke: red !important;
}
</style>
