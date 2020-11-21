<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="navbar-brand">Logo</div>
    <!--<img src="../assets/logo.png" alt="">-->
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
@import '../assets/custom_css/main.scss';

nav {
  a img {
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  }

  .navbar-brand {
    margin-right: 3rem;
  }

 ul li a {
    font-weight: 700;
    &:hover {
      color: $blue!important;
      transition: color .2s;
    }
  }

  .router-link-active {
  color: $blue!important;
}

  .shopping-cart {
  width: 1.7rem;
  cursor: pointer;
  }
}

.navbar-light .navbar-nav .nav-link {
     color: $dark-grey;
}

</style>