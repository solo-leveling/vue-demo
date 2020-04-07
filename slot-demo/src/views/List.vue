<template>
  <div>
      <app-navbar :title="ListName">
          <template #content>
              <p>This is content of List</p>
          </template>
          <template #footer>
              <p>This is footer of List</p>
          </template>
      </app-navbar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
    components:{
        "app-navbar" : NavBar
    },
    data(){
        return{
            ListName : "List Page"
        }
    }
}
</script>

<style>

</style>