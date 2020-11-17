<template>
  <transition appear>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Logo
    <!--<img src="../assets/logo.png" alt="">-->
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" :class="{ active: page === 'User' }" @click="changePage('User')">Boutique</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: page === 'Admin' }" @click="changePage('Admin')">admin</a>
      </li>
    </ul>
  </div>
</nav>
  </transition>
</template>


<script>
import { eventBus } from '../main';

export default {
  data() {
    return {
      page: eventBus.page
    }
  },
  methods: {
    changePage(page) {
      eventBus.changePage(page);
    }
  },
  created() {
    eventBus.$on('update:page', (page) => {
      this.page = page;
    })
  }
}

</script>


<style lang="scss" scoped>
nav a img {
  width: 40px;
  height: 40px;
}

a {
  cursor: pointer;
}

@keyframes fromtop {
  from {
    transform: translateY(-20px);
  }
  to {
  }
}

.v-enter-active {
  animation: fromtop 1s;
}

</style>