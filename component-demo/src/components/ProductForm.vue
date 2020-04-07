<template>
  <div>
    <input type="text" placeholder="ID" v-model="id">
    <input type="text" placeholder="Name" v-model="name">
    <input type="text" placeholder="Price" v-model="price">
    <button @click="submitForm">Add</button>
  </div>
</template>

<script>
export default {
     data(){
        return{
            id: null,name: null,price: null,
        }
    },
    methods:{
        submitForm(){
            var product = {
                id:this.id,name:this.name,price:this.price
            }
            this.$emit('formEvent',product);
        }
    },
   
}
</script>

<style>

</style>