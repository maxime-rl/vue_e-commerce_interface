import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/custom_css/main.scss'

Vue.config.productionTip = false

// initialisation du eventBus
export const eventBus = new Vue({
  data: {
    products: [{
        id: '1',
        img: 'https://cdn.pixabay.com/photo/2015/03/23/17/25/usb-686359_1280.jpg',
        title: 'Red ultra 64GB',
        description: 'Découvrez les clés USB 64 Go, un moyen simple et pratique afin de stocker différentes informations.',
        price: 30.90
      },
      {
        id: '2',
        img: 'https://cdn.pixabay.com/photo/2015/07/28/19/34/thumb-drive-864831_1280.png',
        title: 'Red ultra 64GB',
        description: 'Découvrez les clés USB 64 Go, un moyen simple et pratique afin de stocker différentes informations.',
        price: 44.90
      },
      {
        id: '3',
        img: 'https://cdn.pixabay.com/photo/2015/03/23/17/25/usb-686358_1280.jpg',
        title: 'Red ultra 64GB',
        description: 'Découvrez les clés USB 64 Go, un moyen simple et pratique afin de stocker différentes informations.',
        price: 49.90
      },
      {
        id: '4',
        img: 'https://cdn.pixabay.com/photo/2014/01/26/15/30/usb-stick-252249_1280.png',
        title: 'Red ultra 64GB',
        description: 'Découvrez les clés USB 64 Go, un moyen simple et pratique afin de stocker différentes informations.',
        price: 29.90
      },
      {
        id: '5',
        img: 'https://cdn.pixabay.com/photo/2017/02/05/19/13/usb-2040957_1280.jpg',
        title: 'Red ultra 64GB',
        description: 'Découvrez les clés USB 64 Go, un moyen simple et pratique afin de stocker différentes informations.',
        price: 39.90
      },
      {
        id: '6',
        img: 'https://cdn.pixabay.com/photo/2013/09/17/09/49/pendrive-183146_1280.jpg',
        title: 'Red ultra 64GB',
        description: 'Découvrez les clés USB 64 Go, un moyen simple et pratique afin de stocker différentes informations.',
        price: 49.90
      }
    ],
    cart: [

    ],
    page: 'User'
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.map(i => i.id).includes(product.id)) { // on evite de pouvoir ajouter deux fois le meme produit dans le panier. on utilise .map pour transformer notre array produit en juste array id, afin d utiliser la methode .include de ES6
        this.cart = [...this.cart, product]; // afin de ne pas passer notre produit par reference, on utilise la notation ES6 pour deconstruire l'objet et prendre toutes les key (les valeurs) de l'objet et les placers dans un nouvel objet
        this.$emit('update:cart', this.cart.slice()); // on utilise .sclice() pour retourner une copie de this.cart avec une nouvelle reference, afin d'eviter les conflits entre nos differents array et objet
      }
    },
    removeItemFromCart(item) {
      this.cart = this.cart.slice().filter( i => i.id !== item.id);
      this.$emit('update:cart', this.cart.slice());
    },
    changePage(page) {
      this.page = page; // pas besoin d utiliser .slice ou autre car on recupere une chaine de caractere, donc par defaut copié par valeur
      this.$emit('update:page', this.page);
    }
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')