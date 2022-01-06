<template>
  <div class="wrapper">
    <ul class="items-list">
      <li v-for="(link, index) in links" :key="index" class="active">
        <de-button>{{ link }}</de-button>
      </li>
    </ul>
  </div>
</template>

<script>
import DeButton from '../Button/de-button.vue';

export default {
  name: 'DeNavbar',
  components: {
    DeButton,
  },
  data() {
    return {
      links: ['Liram1', 'Liram2', 'Liram3', 'Liram4'],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }

  li {
    padding: 10px;
  }

  .active {
    border-bottom: 2px solid $app-blue;
  }
}
</style>
