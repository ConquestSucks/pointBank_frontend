import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/components/auth/auth-wrap.vue'
import Home from '@/components/main/main-wrap.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {  path:'/auth', name: 'Auth', component: Auth },
        {  path:'/', name: 'Home', component: Home },
    ]
})

