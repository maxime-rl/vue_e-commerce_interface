import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom_css/main.scss';
import * as Filters from './utils/filters';
import router from './router';
import axios from 'axios';
import store from './store/store';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://vue-e-commerce-interface.firebaseio.com/';
Vue.prototype.$http = axios;

// register filters, Object.keys retourne un tableau retournant les clé d'un objet (ici Filter)
Object.keys(Filters).forEach ( (f) => {
  Vue.filter(f, Filters[f]);
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')