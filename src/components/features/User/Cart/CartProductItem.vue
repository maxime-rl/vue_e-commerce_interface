<template>
<div class="d-flex justify-content-between pt-2">
  <span>{{ item.title }}</span>
  <span class="font-weight-bold">{{ item.price }} €</span>
  <button @click="removeItemFromCart" class="close">
    <span>&times;</span>
  </button>
</div>
</template>


<script>
import { eventBus } from '../../../../main';

export default {
  props: ['item'], // reception des produits
  methods: {
    removeItemFromCart() {
      eventBus.removeItemFromCart({ ...this.item });
    }
  }
}

</script>


<style lang="scss">

</style>