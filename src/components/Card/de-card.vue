<template>
  <div class="de-card">
    <div class="de-card-content">
      <slot></slot>
    </div>
    <div v-if="hasSubtitle" class="de-card-subtitle">
      <slot name="subtitle"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeCard',

  props: {
    subtitle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    hasSubtitle() {
      if (this.$props.subtitle || this.$slots.subtitle) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.de-card {
  position: relative;
  max-width: 66.6%;
  min-width: 33.3%;

  background-color: $app-bg-dark;
  border-radius: $border;
  border: 1px solid setOpacity($neutral-40, 0.8);

  .de-card-content {
    padding: 25px;
  }

  .de-card-subtitle {
    margin-top: 25px;
    border-top: 1px solid setOpacity($neutral-40, 0.8);
    position: relative;
    background-color: $app-dark-grey2;
    padding: 25px;
    text-align: center;
    color: $app-grey;
    border-end-end-radius: $border;
    font-weight: 600;
  }
}
</style>
