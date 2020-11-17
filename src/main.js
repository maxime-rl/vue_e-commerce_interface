import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom_css/main.scss';
import * as Filters from './utils/filters';
import router from './router';
import axios from 'axios';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://vue-e-commerce-interface.firebaseio.com/';
Vue.prototype.$http = axios;

// register filters, Object.keys retourne un tableau retournant les clé d'un objet (ici Filter)
Object.keys(Filters).forEach ( (f) => {
  Vue.filter(f, Filters[f]);
})

// initialisation du eventBus
export const eventBus = new Vue({
  data: {
    products: [],
    cart: [],
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.map(i => i.id).includes(product.id)) { // on evite de pouvoir ajouter deux fois le meme produit dans le panier. on utilise .map pour transformer notre array produit en juste array id, afin d utiliser la methode .include de ES6
        this.cart = [...this.cart, product]; // afin de ne pas passer notre produit par reference, on utilise la notation ES6 pour deconstruire l'objet et prendre toutes les key de l'objet et les placers dans un nouvel objet
        this.$emit('update:cart', this.cart.slice()); // on utilise .sclice() pour retourner une copie de this.cart avec une nouvelle reference, afin d'eviter les conflits entre nos differents array et objet
      }
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter( i => i.id !== item.id);
      this.$emit('update:cart', this.cart.slice());
    },
    addProduct(product) {
      this.$http.post('products.json', product)
                .then( res => {
                  this.product = res.data;
                  this.products = [ ...this.products, { ...product, id: this.products.length + 1 + '' }], // on deconstruit le product qu'on recupere en param afin de le mettre dans un nouvel objet et d'ajouter une nouvelle key ( la id)
                  this.$emit('update:products', this.products);
                })
    },
    addProducts(products) {
      this.products = products;
      this.$emit('update:products', this.products);
    },
    initProducts() {
      this.$http.get('products.json')
                .then( res => {
                  const data = res.data;
                  this.addProducts(Object.keys(data).map( key => data[key]));
                });
    }
  },
  created() { // le hook created nous permet de recuperer la data
    this.initProducts();
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')