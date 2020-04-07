<template>
  <div class="card">
    <div class="card-body">
      <p>ID: {{id}}</p>
      <p>Name:{{name}}</p>
      <p>Price:{{price}}</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-danger float-right" @click="onDelete">Delete</button>
    </div> 
  </div>
</template>

<script>
import store from '@/store'

export default {
    props:['id','name','price'],
    methods:{
      onDelete(){
        store.dispatch('removeProduct',this.id);
        
      }
    }
}
</script>

<style>

</style>