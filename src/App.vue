<template>
  <div id="app">
    <!-- <base-modal>123</base-modal> -->
    <div class="content">
      <div class="header">
        <h2>Welcome!</h2>
        <h3>Please, fill up the form</h3>
      </div>
      <div class="buttons">
        <Button>Liram</Button>
      </div>

      <de-card subtitle>
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
        <div>
          <de-navbar></de-navbar>
        </div>

        <div slot="subtitle">lorem</div>
      </de-card>
    </div>
  </div>
</template>

<script>
// import BaseModal from './components/Modal/BaseModal.vue';
import DeCard from './components/Card/de-card.vue';
import Button from './components/Button/de-button.vue';
import PrimaryButton from './components/Button/de-button-primary.vue';
import GhostButton from './components/Button/de-button-ghost.vue';
import DeInput from './components/Input/de-input.vue';
import SearchInput from './components/Input/SearchInput.vue';
import BaseIcon from './components/Icon/BaseIcon.vue';
import DeNavbar from './components/Navbar/de-navbar.vue';

export default {
  name: 'App',
  components: {
    // BaseModal,
    DeCard,
    DeInput,
    SearchInput,
    GhostButton,
    PrimaryButton,
    BaseIcon,
    DeNavbar,
    Button,
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
</style>
