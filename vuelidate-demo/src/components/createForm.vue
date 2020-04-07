<template>
  <div>
    <form action="" @submit.prevent="create" >
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="" id="" class="form-control" :class="{'is-invalid':this.$v.name.$error}" v-model.trim="$v.name.$model">
        <div class="invalid-feedback">
          <span v-if="!$v.name.minLength">At least Fill 4 letters</span>
          <span v-if="!$v.name.required">Please Fill out Field</span>   
        </div>
      </div>
      <div class="form-group">
        <label for="name">Amount</label>
        <input type="text" name="" id="" class="form-control" :class="{'is-invalid':this.$v.amount.$error}" v-model.trim="$v.amount.$model">
        <div class="invalid-feedback">
          <span v-if="!$v.amount.numeric">Must Be Number!   </span>
          <span v-else-if="!$v.amount.required">Please Fill out Field!  </span>   
          <span v-else-if="!$v.amount.minValueCheck">Must Greater than 999!  </span> 
        </div>
      </div>
      <input type="submit" value="Submit" class="btn btn-primary">
    </form>
  </div>
</template>

<script>
import {required,minLength,numeric} from 'vuelidate/lib/validators'

export default {
  
  data(){
    return{
      name:null,
      amount:null
    }
  },
  watch:{
    name(){
      console.log(this.$v)
    }
  },
  validations:{
    name:{
      required,
      minLength:minLength(4)
    },
    amount:{
      required,numeric,
      minValueCheck(){
        if(isNaN(this.amount) || this.amount>999){
          return true
        }
    
        return false
       
      }
    }
  },
  methods:{
    create(){
      console.log(this.$v)
     
    }
  }
}
</script>

<style>

</style>