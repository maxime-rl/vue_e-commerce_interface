<template>
  <cart-products-list :cart="cart" class="p-3 p-xl-4">
  </cart-products-list>
</template>


<script>
import CartProductsList from './CartProductsList';

export default {
  props: ['cart'],
  components: {
    CartProductsList
  }
}

</script>

<style lang="scss">

</style>