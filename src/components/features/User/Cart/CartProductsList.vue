<template>
  <transition appear>
    <template v-if="cart.length">
      <div class="d-flex flex-column cart-product">
        <h5 class="border-bottom pb-3">Mon panier</h5>
        <!-- key requise quand on utilise v-for sur un composant  -->
        <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
        <hr class="w-100">
        <div class="d-flex justify-content-between">
          <span class="font-weight-bold">Total : {{ total }} €</span>
          <a href="#">Valider</a>
        </div>
      </div>
    </template>
  </transition>
</template>


<script>
  import CartProductItem from './CartProductItem';
  import {
    mapGetters
  } from 'vuex';

  export default {
    components: {
      CartProductItem
    },
    props: ['cart'],
    computed: {
      ...mapGetters('cart', ['total'])
    }
  }
</script>


<style lang="scss" scoped>
  .cart-product {
    background-color: white;
    margin: 33px 10px 10px 10px;
    padding: 15px;
    box-shadow: 0px 0px 13px -8px rgba(0, 0, 0, 0.75);
    border-radius: .25rem;
  }

  a {
      text-decoration: none;
      color: rgb(46, 95, 202);
      background: linear-gradient(to top, rgb(46, 95, 202) 0%, rgb(46, 95, 202) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
      transition: background-size .5s;
      &:hover {
        background-size: 70% 100%;
        color: rgb(46, 95, 202);
        text-decoration: none;
      }
    }

  @keyframes fromtop {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
  }
}

.v-enter-active {
  animation: fromtop 1s;
}
</style>