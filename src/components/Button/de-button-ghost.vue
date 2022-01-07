<template>
  <div class="ghost-button">
    <button @click="clicked">
      <!-- text -->
      <span>
        <slot></slot>
      </span>
      <!-- icon -->
      <slot name="icon" v-if="icon"></slot>
    </button>
  </div>
</template>

<script>
import DeButton from './de-button.vue';

export default {
  name: 'DeButtonGhost',
  extends: DeButton,
};
</script>

<style lang="scss" scoped>
.ghost-button {
  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 11px 25px;
    border-radius: 8px;
    background-color: setOpacity($app-purple, 0.8);
    border: 2px solid $app-purple;

    font-weight: 700;
    font-size: 0.8em;
    font-family: 'Readex Pro';
    line-height: 2em;
    color: $neutral-10;

    :nth-child(1) {
      margin: 0 8px;
    }
  }
}
</style>
