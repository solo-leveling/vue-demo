<template>
  <div>
    <app-navbar :title="pageName">
    <template #footer>
      <a href="https://www.google.com">Google</a>
    </template>
    </app-navbar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components:{
    "app-navbar":NavBar,
  },
  data(){
    return{
      pageName : "Home Page",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
