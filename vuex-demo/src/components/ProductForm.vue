<template>
  <div class="productFrom">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <div class="form-group">
          <label for="">ID</label>
          <input class="form-control" type="text" v-model="id">
        </div>
        <div class="form-group">
          <label for="">Name</label>
          <input class="form-control" type="text" v-model="name">
        </div>
        <div class="form-group">
          <label for="">Price</label>
          <input class="form-control" type="text" v-model="price">
        </div>
    
        <button class="btn btn-primary" @click="submitForm">Add</button>
      </div>
    </div>
  </div>
</template>

<script>

import store from '@/store'

export default {
    methods:{
    submitForm(){
      var product = {
          id:this.id,
          name:this.name,
          price:this.price
      }

      store.dispatch('addProduct',product);
    }
  },
  data(){
      return{
          id:null,
          name:null,
          price:null
      }
  }
}
</script>

<style>

</style>