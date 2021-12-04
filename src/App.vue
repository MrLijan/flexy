<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <PrimaryButton text="Primary button"> liram </PrimaryButton>
  </div>
</template>

<script>
// import Button from '@/components/Base/Button.vue';
import PrimaryButton from './components/Base/PrimaryButton.vue';

export default {
  name: 'App',
  components: {
    // Button,
    PrimaryButton,
  },
};
</script>

<style lang="scss">
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap');

:root {
  --app-white: hsl(0, 0%, 100%);
  --app-blue: hsl(216, 100%, 40%);
  --app-dark-blue: hsl(218, 54%, 20%);
  --app-green: hsl(155, 54%, 46%);
  --app-yellow: hsl(40, 100%, 50%);
  --app-red: hsl(11, 100%, 59%);
  --app-turquoise: hsl(189, 100%, 43%);
  --app-purple: hsl(249, 46%, 54%);
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
