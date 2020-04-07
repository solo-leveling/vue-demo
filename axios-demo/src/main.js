import Vue from 'vue'
import App from './App.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

Vue.config.productionTip = false
Vue.component('app-spinner', PulseLoader)
new Vue({
    render: h => h(App),
}).$mount('#app')