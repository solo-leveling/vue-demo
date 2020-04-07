import axios from 'axios'
const state = {
    posts: [],
    message: null
}
const mutations = {
    setPosts(state, posts) {
        state.posts = posts;

    },
    setError(state, message) {
        state.message = message;
    },
    addPost(state, post) {
        state.posts.push(post);
    },
    delete(state, id) {
        var index = state.posts.findIndex(e => e.id == id);
        state.posts.splice(index, 1);
    },
    update(state, post) {
        var index = state.posts.findIndex(e => e.id == post.id);
        state.posts[index] = post;
    }
}
const actions = {
    async getPosts({ commit }) {
        try {
            commit('setError', null);
            const res = await axios.get('http://localhost:8000/api/posts')
            console.log(res)

            commit('setPosts', res.data);

        } catch (err) {
            commit('setError', err);
        }
    },
    async createPost({ commit }, data) {
        try {
            const res = await axios.post('http://localhost:8000/api/posts', data)
            commit('addPost', res.data);

        } catch (err) {
            return err;
        }
    },
    async deletePost({ commit }, id) {
        try {
            await axios.delete('http://localhost:8000/api/posts/' + id)

            commit('delete', id);


        } catch (err) {
            return err;
        }
    },
    async updatePost({ commit }, data) {
        try {
            const res = await axios.put('http://localhost:8000/api/posts/' + data.id, data);
            commit('update', res.data);
            // console.log(res);

        } catch (err) {
            return err;
        }
    }
}
const getters = {
    posts(state) {
        return state.posts;
    },
    message(state) {
        return state.message;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}