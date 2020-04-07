<template>
  <div>
    <div class="row">
      <div class="col-4 mx-auto">
        <div class="card">
          <div class="card-body">
            <form action="" @submit.prevent="updateForm">
              <div class="form-group">
                <label for="title">Title</label>
                <input type="text" name="" id="title" class="form-control" v-model="editablePost.title">
              </div>
              <div class="form-group">
                <label for="title">Categories</label>
                <input type="text" name="" id="title" class="form-control" v-model="editablePost.categories">
              </div>
              <div class="form-group">
                <label for="body">Body</label>
                <textarea name="" id="body" cols="30" rows="10" class="form-control" v-model="editablePost.body"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Update" class="btn btn-primary block form-control">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  computed:{
    editablePost(){
      var postId = this.$route.params.id;
      var foundpost =store.getters.posts.find(e=>e.id==postId);
      return foundpost;
    }
  },
  methods:{
     async updateForm(){
         console.log(this.editablePost)
        await store.dispatch('updatePost',this.editablePost);
       this.$router.push({ name: 'postsList' });
    }
  },
}
</script>

<style>

</style>