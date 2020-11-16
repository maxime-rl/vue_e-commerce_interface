<template>
<div class="card" style="width: 12rem;">
  <img :src=product.img class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.title }}</h5>
    <p class="card-text">{{ product.description }}</p>
    <div class="d-flex justify-content-between">
        <span class="font-weight-bold">{{ product.price }} €</span>
        <a href="#" @click="addProductToCart" class="btn btn-primary btn-sm">Commander</a>
    </div>
  </div>
</div>
</template>


<script>
import { eventBus } from '../../main';

export default {
  props: ['product'],
  methods: {
    addProductToCart() {
      eventBus.addProductToCart({ ...this.product }) // afin de ne pas passer notre produit par reference on utilise la notation ES6 pour deconstruire l'objet et prendre toutes les key (les valeurs) de l'objet et les placers dans un nouvel objet
    }
  }
}

</script>


<style lang="scss">
.product-container {
  height: 400px;
}
p{
  font-size: 14px;
}
.card {
  margin: 10px;
  box-shadow: 0px 0px 13px -8px rgba(0,0,0,0.75);
  border: none!important;
  transition: .4s;
  bottom: 0;
  &:hover {
    bottom: 5px;
    box-shadow: 0px 7px 16px -8px rgba(0, 0, 0, 0.75);
  }
}
</style>