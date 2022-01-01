<template>
  <div id="app">
    <!-- <base-modal>123</base-modal> -->
    <div class="content"></div>
    <div class="header">
      <h2>Welcome!</h2>
      <h3>Please, fill up the form</h3>
    </div>
    <div class="main-box">
      <form>
        <de-input @type="logSome" label="First name" message="Password incorrect"> </de-input>
        <search-input @type="logSome" label="Country" icon="search-1"></search-input>
        <ghost-button icon>
          <base-icon slot="icon" src="add-circle" />
          Discord
        </ghost-button>
      </form>
      <primary-button class="cta-button" icon fluid>
        Take me to the next step
        <base-icon src="arrow-right" slot="icon" />
      </primary-button>
    </div>
  </div>
</template>

<script>
// import BaseModal from './components/Modal/BaseModal.vue';
import PrimaryButton from './components/Button/de-button-primary.vue';
import GhostButton from './components/Button/de-button-ghost.vue';
import DeInput from './components/Input/de-input.vue';
import SearchInput from './components/Input/SearchInput.vue';
import BaseIcon from './components/Icon/BaseIcon.vue';

export default {
  name: 'App',
  components: {
    // BaseModal,
    DeInput,
    SearchInput,
    GhostButton,
    PrimaryButton,
    BaseIcon,
  },

  methods: {
    logSome(ev) {
      console.log(ev);
    },
  },
};
</script>

<style lang="scss">
/* Imports */
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap');
@import './assets/styles/_variables.scss';

body {
  display: grid;
  place-items: center;
  height: 90vh;
  font-size: 16px;
}

#app {
  font-family: 'Readex Pro', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 50px;
  min-width: 500px;
  min-height: 750px;
  background-color: var(--app-grey-500);
  border: 1px solid $neutral-30;
  border-radius: 8px;

  box-shadow: shadow($neutral-50);
}
</style>
