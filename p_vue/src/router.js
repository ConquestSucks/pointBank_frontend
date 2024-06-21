import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './store/auth'
import Auth from '@/components/auth/auth-wrap.vue'
import Home from '@/components/main/main-wrap.vue'
import Profile from '@/components/profile/profile-wrap.vue'
import Contacts from '@/components/contacts-wrap.vue'
import Routes from '@/components/routes-wrap.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {  path:'/auth', name: 'Auth', component: Auth },
        {  path:'/', name: 'Home', component: Home },
        {  path:'/myprofile', name: 'MyProfile', component: Profile, meta: { requiresAuth: true } },
        {  path:'/routes', name: 'Routes', component: Routes },
        {  path:'/contacts', name: 'Contacts', component: Contacts },
    ]
})

router.beforeEach((to, from, next) => {

  if (to.name === 'Auth' && useAuthStore().user) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router
  

