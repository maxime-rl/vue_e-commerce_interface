<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <component :is="page"></component> <!-- composant dynamique -->
    </div>
  </div>
</template>

<script>
import { eventBus } from './main';

import TheHeader from './components/TheHeader';
import User from './components/features/User/User';
import Admin from './components/features/Admin/Admin';


export default {
  name: 'App',
  components: {
    // export components
    TheHeader,
    User,
    Admin
  },
  data() {
    return {
      page: eventBus.page
    }
  },
  created() { // on ecoute les changements de attribut .page de eventBus
    eventBus.$on('update:page', (page) => { // mise a jour de la propriete .page
      this.page = page;
    })
  }
}
</script>

<style lang="scss">

</style>
