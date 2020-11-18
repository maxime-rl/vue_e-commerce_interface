<template>
<transition appear>
<div class="card" style="width: 12rem;">
  <div class="img-container">
    <img :src=product.img class="card-img-top img-fluid" alt="...">
  </div>
  <div class="card-body">
    <h6 class="card-title">{{ product.title }}</h6>
    <p class="card-text">{{ product.description }}</p>
    <div class="d-flex justify-content-between align-items-baseline">
        <span class="font-weight-bold">{{ product.price | price }}</span> <!-- | price est l'ajout du filter -->
        <a href="#" @click="addOne(product)">Ajouter</a>
    </div>
  </div>
</div>
</transition>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  props: ['product'],
  methods: {
    ...mapMutations('cart', ['addOne'])
  }
}

</script>


<style lang="scss" scoped>
.product-container {
  height: 400px;
}

p{
  font-size: 14px;
  line-height: 1rem;
}

.card {
  height: 260px;
  margin: 10px;
  box-shadow: 0px 0px 13px -8px rgba(0,0,0,0.75);
  border: none!important;
  transition: .4s;
  bottom: 0;
  &:hover {
    bottom: 5px;
    box-shadow: 0px 7px 16px -8px rgba(0, 0, 0, 0.75);
  }

  img {
    height: 95px;
    cursor: pointer;
    object-fit: cover;
  }

  .card-body {
    padding: .75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  h6 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
    span {
      font-size: 14px;
    }
    a {
      text-decoration: none;
      color: rgb(46, 95, 202);
      background: linear-gradient(to top, rgb(46, 95, 202) 0%, rgb(46, 95, 202) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
      transition: background-size .5s;
      &:hover {
        background-size: 70% 100%;
        color: rgb(46, 95, 202);
      }
    }
  }
}
@keyframes frombottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
  }
}

.v-enter-active {
  animation: frombottom 1s;
}
</style>