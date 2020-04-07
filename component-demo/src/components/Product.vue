<template>
    <div>
        <!-- <p v-for="product in products" :key="product.id"> -->
            ID :: {{id}} || Name :: {{name}} || Price :: {{price}}
            <!-- <button @click="todel">Delete</button> -->
        <!-- </p> -->
        
    </div>
</template>

<script>
export default {
    props:[
      'id',  'name','price'
    // 'products'
    ],
    data(){
        return{
            
        }
    },
    methods:{
        todel(){
            // var product ={id:this.id}
        
            this.$emit('delete',this.id);
        }
    },
}

</script>

<style>

</style>
