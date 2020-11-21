<template>
<transition appear name="appear-item">
<div class="d-flex justify-content-between pt-3">
  <span>{{ item.title }}</span>
  <div>
    <span>{{ item.price | price }}</span> <!-- | price est l'ajout du filter -->
    <button @click="deleteOne(item.id)" class="close ml-3">
    <span>&times;</span>
  </button>
  </div>
</div>
</transition>
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
@import '../../../../assets/custom_css/main.scss';
button:focus {
      outline: 0px;
}

.close:hover{
  color: $red;
}

</style>