<template>
  <div id="app">
    <primary-button text="Primary button">Primary Button</primary-button>
    <base-button icon="add">Default Button</base-button>
    <base-input placeholder="Insert your text please"></base-input>
  </div>
</template>

<script>
import BaseButton from './components/Button/BaseButton.vue';
import PrimaryButton from './components/Button/PrimaryButton.vue';
import BaseInput from './components/Input/BaseInput.vue';

export default {
  name: 'App',
  components: {
    BaseButton,
    PrimaryButton,
    BaseInput,
  },
};
</script>

<style lang="scss">
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap');
@import './assets/styles/_variables.scss';

:root {
  --app-bg: hsl(0, 0%, 9%);
  --app-white: hsl(0, 0%, 100%);
  --app-blue: hsl(216, 100%, 40%);
  --app-dark-blue: hsl(218, 54%, 20%);
  --app-green: hsl(155, 54%, 46%);
  --app-yellow: hsl(40, 100%, 50%);
  --app-red: hsl(11, 100%, 59%);
  --app-turquoise: hsl(189, 100%, 43%);
  --app-purple: hsl(249, 46%, 54%);

  --app-grey-500: hsl(210, 25%, 98%);
  --app-grey-600: hsl(228, 14%, 93%);
}

html {
  background: var(--app-bg);
}

#app {
  font-family: 'Readex Pro', Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
