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
        <router-link class="nav-link" to="/shop">Boutique</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin">Admin</router-link>
      </li>
    </ul>
  </div>
</nav>
  </transition>
</template>


<script>
export default {
  
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

.router-link-active {
  color: #1c1c1c;
}
</style>