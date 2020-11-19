<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-9">
          <shop :products="products"></shop>
      </div>
      <div class="col-xl-3">
        <cart :cart="cart"></cart>
      </div>
    </div>
  </div>
</template>


<script>
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import { mapState } from 'vuex';

export default {
  components: {
    Shop,
    Cart,
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


<style lang="scss" scoped>
.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}

.v-leave-active {
  transition: all 1s;
}
</style>