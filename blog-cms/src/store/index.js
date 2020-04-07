import Vuex from 'vuex'
import Vue from 'vue'
import posts from './modules/posts'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        posts
    }
})

export default store;