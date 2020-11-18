<template>
<div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light">
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
      <img class="shopping-cart" src="../assets/shopping-cart.svg" alt="">
  </div>
</nav>
</div>
    
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

a,
img {
  cursor: pointer;
}

.router-link-active {
  color: #1c1c1c;
}

.shopping-cart {
  width: 30px;
}
</style>