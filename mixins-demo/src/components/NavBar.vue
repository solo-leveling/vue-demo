<template>
  <div>
      <h1>NavBar</h1>
      <button @click="sayHello">logOut</button>
  </div>
</template>

<script>
import {mymix,navBar} from '../mixins/myMixin'
export default {
    mixins:[mymix,navBar],
    created(){
        console.log("NavBar created")
    }
}
</script>

<style>

</style>