<template>
  <div id="app">
    <!-- <base-modal>123</base-modal> -->
    <div class="content">
      <de-card subtitle>
        <div class="header">
          <h2>Welcome!</h2>
          <h4>Please login to claim your prizes</h4>
        </div>

        <form class="form">
          <de-input @type="logSome" placeholder="USERNAME"></de-input>
          <de-input-search placeholder="PASSWORD"></de-input-search>
        </form>
        <primary-button class="cta-button" icon fluid>
          Take me to the unknown
          <base-icon src="arrow-right" slot="icon" />
        </primary-button>

        <div class="actions">
          <de-button-ghost icon>
            <base-icon slot="icon" src="discord"></base-icon>
            Login with Discord
          </de-button-ghost>
          <de-button-ghost icon>
            <base-icon slot="icon" src="arrow-right"></base-icon>
            Login with Google
          </de-button-ghost>
        </div>

        <div slot="subtitle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </de-card>
    </div>
  </div>
</template>

<script>
// import BaseModal from './components/Modal/BaseModal.vue';
import DeCard from '../components/Card/de-card.vue';
import PrimaryButton from '../components/Button/de-button-primary.vue';
import DeInput from '../components/Input/de-input.vue';
import DeInputSearch from '../components/Input/de-input-search.vue';
import BaseIcon from '../components/Icon/BaseIcon.vue';
import DeButtonGhost from '../components/Button/de-button-ghost.vue';

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
  position: relative;
  text-align: center;
  margin-bottom: 50px;

  h2 {
    text-transform: uppercase;
    color: $app-bg;
  }
  h4 {
    margin-top: -20px;
    color: $app-grey;
    font-weight: 400;
    font-size: 0.8em;
  }
}

.form {
  margin-bottom: 45px;

  * {
    margin-bottom: 15px;
  }
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
}
</style>
