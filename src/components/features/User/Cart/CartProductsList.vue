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
          <a class="font-weight-bold" href="#">Valider</a>
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
@import '../../../../assets/custom_css/main.scss';
  .cart-product {
    background-color: white;
    margin: 3.5rem 1rem 1rem 1rem;
    padding: 1.5rem;
    box-shadow: 0px 0px 1.3px -8px rgba(0, 0, 0, 0.75);
    border-radius: .25rem;
  }

  a { @include blue-decoration-text; }

  @keyframes fromtop {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
  }
}

.v-enter-active  {
  animation: fromtop 1s;
}

.v-enter {
  opacity: 0;
}

.v-leave-to {
  animation: fromtop-2 1s;
}

@keyframes fromtop-2 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-5px);
  }
}
</style>