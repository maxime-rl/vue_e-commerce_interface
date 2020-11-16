<template>
<div class="card" style="width: 12rem;">
  <img :src=product.img class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ product.title }}</h5>
    <p class="card-text">{{ product.description }}</p>
    <div class="d-flex justify-content-between">
        <span class="font-weight-bold">{{ product.price }}</span>
        <a href="#" class="btn btn-primary btn-sm">Commander</a>
    </div>
  </div>
</div>
</template>


<script>

export default {
  // data method because we are in a component
  data() {
    return {
      product: {
        img: 'https://cdn.pixabay.com/photo/2015/03/23/17/25/usb-686358_1280.jpg',
        title: 'Red ultra 64GB',
        description: 'Découvrez les clés USB 64 Go, un moyen simple et pratique afin de stocker différentes informations.',
        price: '30€'
      }
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