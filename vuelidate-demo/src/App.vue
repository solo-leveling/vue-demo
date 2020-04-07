<template>
  <div id="app">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <createForm/>
        <!-- <numberForm/> -->
      </div>
    </div>   
  </div>
</template>

<script>
import createForm from './components/createForm.vue'
// import numberForm from './components/numberForm'
export default {
  name: 'App',
  components: {
    createForm,
    // numberForm
  }
}
</script>

<style>

</style>
