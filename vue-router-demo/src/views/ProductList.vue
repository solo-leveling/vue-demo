<template>
  <div class="product-list">
      <div class="row mt-3">
          <div class="col-md-3" v-for="item in items" v-bind:key="item.id" >
            <app-product :id="item.id" :name="item.name" v-bind:price="item.price"/>
          </div>
      </div>
  </div>
</template>

<script>
import store from '@/store'
import Product from '@/components/Product.vue'
export default {
    components:{
        "app-product" : Product
    },
    computed:{
        items(){
            return store.getters.products;
        }
    }
}
</script>

<style>

</style>