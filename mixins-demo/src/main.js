import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/NavBar.vue'
Vue.config.productionTip = false
Vue.component("app-navbar", Navbar)
new Vue({
    render: h => h(App),
}).$mount('#app')