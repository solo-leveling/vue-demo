<template>
  <div>
    <div class="row">
      <div class="col">
        <button class="btn btn-success btn-sm float-right mb-3" @click="showCreateForm"> Create </button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <template v-if="message"> 
          <p class="alert alert-danger">{{message}}</p>
        </template>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Categories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{item.id}}</td><td>{{item.title}}</td><td>{{item.created_at}}</td><td>{{item.updated_at}}</td><td>{{item.categories}}</td><td><button class="btn btn-danger btn-sm" @click="toDelete(item.id)" >Delete</button><button class="btn btn-warning btn-sm ml-3" @click="toEdit(item.id)">Edit</button></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  computed:{
     items(){
      // this.fetchPosts();
      
      return store.getters.posts;
      
    },
    message(){
      return store.getters.message;
    }
  },
  created(){
    
    this.fetchPosts();
            
  },
  methods:{
    fetchPosts(){
      store.dispatch('getPosts');
      
    },
    showCreateForm(){
      this.$router.push('/posts/create');
    },
    toDelete(id){
      store.dispatch('deletePost',id);
    },
    toEdit(id){
      this.$router.push('/posts/'+id+'/edit')
    }
  }
}
</script>

<style>

</style>