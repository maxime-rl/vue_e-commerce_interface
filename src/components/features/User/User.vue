<template>
  <div class="d-flex flex-row">
      <shop :products="products" class="w-75"></shop>
      <cart :cart="cart" class="w-25"></cart>
  </div>
</template>


<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import { mapState } from 'vuex';

export default {
  components: {
    Shop,
    Cart
  },
  computed: {
    ...mapState('product', { // on recupere les produits avec le helper mapState, le namespaced (product) et un alias (ici products) qui correspond à datas. datas va etre recuperer dans une key products
      products: 'datas'
    }),
      ...mapState('cart', { // idem pour cart
      cart: 'datas'
      })
  },
  created() {
    this.$store.dispatch('product/fetchDatas');
  }
}

</script>


<style lang="scss">

</style>