<template>
  <div>
      <h1>Product Detail</h1>
      <template v-if="item">
      <p>ID::{{item.id}}</p>
      <p>Name::{{item.name}}</p>
      <p>Price::{{item.price}}</p>
      </template>
      <template><p>Loading</p></template>
  </div>
</template>

<script>
import store from '@/store'
// import Product from '@/components/Product.vue'
export default {
    // props:['id','name','price'],
    created(){
        // alert(this.$router.params.id);
        store.dispatch('getProduct',this.$route.params.id)
    },
    computed:{
        item(){
        return store.getters.product;
        }
    }

}
</script>

<style>

</style>