import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './store/auth'
import Cookies from 'js-cookie'
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

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    const accessToken = Cookies.get('access_token');
  
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (accessToken) {
        if (!authStore.accessToken) {
          authStore.accessToken = accessToken;
        }
        next();
      } 
      else {
        next({ name: 'Auth' });
      }
    } 
    else {
      next();
    }
});

export default router
  

