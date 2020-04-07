import VueRouter from 'vue-router'
import Vue from 'vue'
import PostContainer from '@/containers/PostContainer'
import Login from '@/views/Login'
import Register from '@/views/Register'
import PostList from '@/views/posts/List'
import PostCreate from '@/views/posts/Create'
import PostEdit from '@/views/posts/Edit'
import DefaultContainer from '@/containers/DefaultContainer'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: DefaultContainer,
        children: [{
            path: 'posts',
            component: PostContainer,
            children: [
                { path: '', name: "postsList", component: PostList },
                { path: 'create', name: "create", component: PostCreate },
                { path: ':id/edit', name: "edit", component: PostEdit }
            ]
        }, ]
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },

]

const router = new VueRouter({
    mode: 'history',
    routes,

})

export default router;