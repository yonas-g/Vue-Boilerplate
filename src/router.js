import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'app',
            component: App
        },
        // {
        //     path: '/about',
        //     name: 'About',
        //     //route level code-splitting
        //     //lazy-loaded when the router is visitied
        //     component: () => import('./components/about.vue')
        // }
    ]
})