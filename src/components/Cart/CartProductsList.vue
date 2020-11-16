<template>
  <div class="d-flex flex-column p-4">
    <h5 class="border-bottom pb-3">Mon panier</h5>
    <!-- key requise quand on utilise v-for sur un composant  -->
    <cart-product-item v-for="item in cart" :key="item.id" :item="item"></cart-product-item> 
    <hr class="w-100">
  </div>
</template>


<script>
import CartProductItem from './CartProductItem.vue'

export default {
    components: {
    CartProductItem
  },
  props: [ 'cart' ]
}

</script>


<style lang="scss">

</style>