import { createRouter, createWebHistory } from 'vue-router'

import Auth from '@/components/auth/auth-wrap.vue'
import Home from '@/components/main/main-wrap.vue'
import Profile from '@/components/profile/profile-wrap.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {  path:'/auth', name: 'Auth', component: Auth },
        {  path:'/', name: 'Home', component: Home },
        {  path:'/myprofile', name: 'MyProfile', component: Profile },
    ]
})

