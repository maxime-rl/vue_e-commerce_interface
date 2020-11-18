<template>
<div class="d-flex justify-content-between pt-2">
  <span>{{ item.title }}</span>
  <span class="font-weight-bold">{{ item.price | price }}</span> <!-- | price est l'ajout du filter -->
  <button @click="deleteOne(item.id)" class="close">
    <span>&times;</span>
  </button>
</div>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  props: ['item'], // reception des produits
  methods: {
    ...mapMutations('cart', ['deleteOne'])
  }
}

</script>


<style lang="scss">
button:focus {
      outline: 0px;
}

.close:hover{
  color: #ec1414;
}
</style>