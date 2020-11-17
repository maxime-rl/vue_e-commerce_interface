import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const product = {
    namespaced: true,
    state: {
        datas: []
    },
    mutations: {
        addOne(state, product) {
            state.datas.push(product);
        },
        addMany(state, products) {
            state.datas = products
        }
    },
    actions: {
        fetchDatas(context) {
            axios.get('products.json').then( res => {
              const data = res.data;
              context.commit('addMany', Object.keys(data).map( key => data[key])); // on transforme l'objet data en array et chaque valeurs dans l'array sera une key de data
            });
        },
        saveOne(context, product) {
            axios.post('products.json', product).then( () => {
                context.commit('addOne', product);
            })
        }
    }
}

const cart = {
    namespaced: true,
    state: {
        datas: []
    },
    getters: { 
        total(state) {
            return state.datas.reduce((acc, p) => { // reduce est une methode permettant (entre autre) de definir une fonction callback et permet d'appliquer une fonction qui traite chaque valeur d'un tableau afin de la reduire a une seule valeur
                acc += p.price
                return acc;
            }, 0);
        }
    },
    mutations: {
        addOne(state, product) {
            state.datas.push(product);
        },
        deleteOne(state, id) {
            const index = state.datas.findIndex( d => d.id === id);
            state.datas.splice(index, 1);
        }
    }
}

const store = new Vuex.Store({
    modules: {
        product,
        cart
    }
})

export default store;