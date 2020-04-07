<template>

  <div id="app">
       <app-navbar/>
      <!-- custom event -->
     
    <div class="container">
    
      <!-- <router-link :to="{name:'List'}">Product List</router-link>
      <router-link :to="{name:'Create'}">Product Form</router-link> -->
      <router-view></router-view>  
    </div>
  </div>
</template>

<script>

import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components:{
    "app-navbar" : NavBar
  }
}
</script>

