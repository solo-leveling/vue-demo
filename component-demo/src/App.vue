<template>
  <div id="app">
    
    <!-- <input type="text" placeholder="ID" v-model="product.newID">
    <input type="text" placeholder="Name" v-model="product.newName">
    <input type="text" placeholder="Price" v-model="product.newPrice"> -->
    <app-product-form @formEvent="addProduct"/>
    <!-- <app-product v-for="product in products" :key="product.id" :id="product.id" :name="product.name" :price="product.price"/> -->
    <app-product v-bind:products="products" @delete="del"/>
  </div>
</template>

<script>
import Product from './components/Product.vue'
import ProductForm from './components/ProductForm.vue'
export default {
  name: 'App',
  components: {
    "app-product" : Product,
    "app-product-form" : ProductForm
  },
  data(){
    return{
      // product:{
      
      
      // },
      products:[
        {id:1,name:"Wireless Mouse",price:20000},
        {id:2,name:"Wireless Keyboard",price:30000},
        {id:3,name:"Wireless Laptop",price:50000}
      ]
    }
    
  },
  methods:{
        // onClick(){
        //   this.products.push({id:this.newID,name:this.newName,price:this.newPrice});
        //   // this.products.push({id:this.product.newID,name:this.product.newName,price:this.product.newPrice});
        // },
        addProduct(item){
          this.products.push(item);
        },
        del(id){
          var index = this.products.findIndex(function(e){
            return e.id == id;
          });
          this.products.slice(index,1);
        },
    }
}
</script>

<style>

</style>