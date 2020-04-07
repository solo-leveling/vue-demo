import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CreateProduct from './views/CreateProduct.vue'
import ProductList from './views/ProductList.vue'
import ProductDetail from './views/ProductDetail.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: "/", name: "List", component: ProductList },
        { path: "/create", name: "Create", component: CreateProduct },
        { path: "/detail", name: "Detail", component: ProductDetail }
    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')