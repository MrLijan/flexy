<template>
  <div id="app">
    <div class="content"></div>
    <div class="header">
      <h2>Welcome!</h2>
      <h3>Please, fill up the form</h3>
    </div>
    <div class="main-box">
      <form action="">
        <base-input @type="logSome" label="First name"></base-input>
        <ghost-button icon="add-circle">Discord</ghost-button>
      </form>
      <primary-button class="cta-button" icon="arrow-right"
        >Take me to the next step</primary-button
      >
    </div>
  </div>
</template>

<script>
// import BaseButton from './components/Button/BaseButton.vue';
import PrimaryButton from './components/Button/PrimaryButton.vue';
import BaseInput from './components/Input/TextInput.vue';
import GhostButton from './components/Button/GhostButton.vue';

export default {
  name: 'App',
  components: {
    BaseInput,
    GhostButton,
    PrimaryButton,
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
