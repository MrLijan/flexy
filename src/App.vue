<template>
  <div id="app">
    <!-- <base-modal>123</base-modal> -->
    <div class="content">
      <div class="header">
        <h2>Welcome!</h2>
        <h3>Please, fill up the form</h3>
      </div>

      <de-card subtitle>
        <form class="form">
          <de-input @type="logSome" placeholder="USERNAME"></de-input>
          <de-input-search placeholder="PASSWORD"></de-input-search>
        </form>
        <primary-button class="cta-button" icon fluid>
          Take me to the next step
          <base-icon src="arrow-right" slot="icon" />
        </primary-button>

        <div class="actions">
          <de-button-ghost icon>
            <base-icon slot="icon" src="discord"></base-icon>
            Discord Login
          </de-button-ghost>
        </div>

        <div slot="subtitle">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.asdad</p>
        </div>
      </de-card>
    </div>
  </div>
</template>

<script>
// import BaseModal from './components/Modal/BaseModal.vue';
import DeCard from './components/Card/de-card.vue';
import PrimaryButton from './components/Button/de-button-primary.vue';
import DeInput from './components/Input/de-input.vue';
import DeInputSearch from './components/Input/de-input-search.vue';
import BaseIcon from './components/Icon/BaseIcon.vue';
import DeButtonGhost from './components/Button/de-button-ghost.vue';

export default {
  name: 'App',
  components: {
    // BaseModal,
    DeCard,
    DeInput,
    DeInputSearch,
    PrimaryButton,
    BaseIcon,
    DeButtonGhost,
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
@import './assets/styles/_variables.scss';
@import './assets/styles/app.scss';

body {
  display: grid;
  place-items: center;
  height: 90vh;
}

#app {
  width: 100%;
}

.content {
  display: grid;
  place-items: center;
}

.header {
  position: inherit;
  text-align: left;
  width: 33.3%;
}

.form > * {
  margin-bottom: 24px;
}

.actions {
  margin-top: 26px;
}
</style>
