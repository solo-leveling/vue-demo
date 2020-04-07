import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Product from './components/Product.vue'

Vue.config.productionTip = false

Vue.component("app-home",Home);
Vue.component("app-product",Product);

new Vue({
  render: h => h(App),
}).$mount('#app')
