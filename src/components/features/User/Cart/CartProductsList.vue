<template>
  <div class="d-flex flex-column p-4">
    <h5 class="border-bottom pb-3">Mon panier</h5>
    <!-- key requise quand on utilise v-for sur un composant  -->
    <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item>
    <template v-if="cart.length">
      <hr class="w-100">
      <span>Total : {{ total }} €</span>
    </template> 
  </div>
</template>


<script>
import CartProductItem from './CartProductItem.vue'

export default {
    components: {
    CartProductItem
  },
  props: [ 'cart' ],
  computed: {
    total() {
      return this.cart.reduce((acc, v) => { // .reduce est une methode permettant de definir une fonction callback et permet d'appliquer une fonction qui traite chaque valeur d'un tableau afin de la reduire a une seule valeur
        acc += v.price;
        return acc;
      }, 0)
    }
  }
}

</script>


<style lang="scss">

</style>