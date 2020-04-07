import Vuex from 'vuex'
import Vue from 'vue'
import products from './modules/products'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        products
    }
})

export default store;