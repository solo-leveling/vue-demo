<template>
  <div>
    <p>{{message}}</p>
    <button @click="sayHello">Click</button>
  
  </div>
</template>

<script>
import {mymix} from '../mixins/myMixin'
export default {
  mixins:[mymix],
  data(){
    return{
    message:"message from component"
    } 
  },
  methods:{
    sayHello(){
      console.log("Hello");
    }
  }
}
</script>

<style>

</style>