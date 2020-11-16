<template>
  <div id="app">
    <the-header></the-header>
    <user></user>
    <admin></admin>
  </div>
</template>

<script>
// import local components
import TheHeader from './components/TheHeader.vue';
import User from './components/features/User/User';
import Admin from './components/features/Admin/Admin';


export default {
  name: 'App',
  components: {
    // export components
    TheHeader,
    User,
    Admin
  }
}
</script>

<style lang="scss">

</style>
