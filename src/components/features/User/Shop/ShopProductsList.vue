<template>
  <div class="d-flex flex-row flex-wrap">
    <!-- key requise quand on utilise v-for sur un composant  -->
    <shop-product-item v-for="product in products" :key="product.id" :product="product"></shop-product-item> 
  </div>
</template>


<script>
import ShopProductItem from './ShopProductItem.vue'

export default {
    components: {
    ShopProductItem
  },
  props: [ 'products' ]
}

</script>


<style lang="scss">

</style>