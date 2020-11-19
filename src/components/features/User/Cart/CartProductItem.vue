<template>
<transition appear name="appear-item">
<div class="d-flex justify-content-between pt-2">
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

  @keyframes fromtop {
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
  }
}

.appear-item-enter-active {
  animation: fromtop .5s;
}
</style>