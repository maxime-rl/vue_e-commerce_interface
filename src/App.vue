<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-column w-100 background">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader,
  }
}
</script>

<style lang="scss">
.background {
  min-height: 100vh;
  background-color: #eeeeee;
}
</style>
