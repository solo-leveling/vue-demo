<template>
  <div id="app">
      <!-- custom event -->
    <div class="container">
        <app-product-form/>
        <div class="row mt-3">
          <div class="col-md-3" v-for="item in items" v-bind:key="item.id" >
            <app-product :id="item.id" :name="item.name" v-bind:price="item.price"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Product from './components/Product.vue'
import ProductForm from './components/ProductForm.vue'
import store from './store'

export default {
  name: 'App',
  components: {
    "app-product":Product,
    "app-product-form":ProductForm
  },
  computed:{
    items:function(){
      return store.getters.products;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
