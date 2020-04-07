<template>
  <div>
    <app-navb></app-navb>
    <div class="container pt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
    components:{
        "app-navb" : NavBar
    }
}
</script>

<style>

</style>