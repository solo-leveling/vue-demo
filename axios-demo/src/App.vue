<template>
  <div id="app">
    <button @click="loadUsers">Load</button>
    <template v-if="loading">
    <app-spinner/>
    </template>
    <template v-else>
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Email</th><th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.phone}}</td>
        </tr>
      </tbody>
    </table>
    </template>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return{
      users:null,
      loading:false
    }
  },
  methods:{
    loadUsers(){
     axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
       this.loading = true;
       setTimeout(() => {
       this.users = res.data;  
       this.loading = false;
       }, 3000);
       
     }).catch((err)=>{
       console.dir(err)
     });
     
    }
  }
}
</script>