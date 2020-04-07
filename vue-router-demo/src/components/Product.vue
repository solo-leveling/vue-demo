<template>
  <div class="card">
    <div class="card-body">
      <p>ID: {{id}}</p>
      <p>Name:{{name}}</p>
      <p>Price:{{price}}</p>
    </div>
    <div class="card-footer">
      <!-- <router-link :to="{name:'Detail'}" class="btn btn-sm btn-primary"> Show</router-link> -->
      <button class="btn btn-primary btn-sm" @click="showDetail">Show</button>
      <button class="btn btn-danger btn-sm float-right" @click="onDelete">Delete</button>
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
        
      },
      showDetail(){
        this.$router.push({name:'Detail',params:{id:this.id}})
      }
    }
}
</script>

<style>

</style>