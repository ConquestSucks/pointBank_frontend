import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'

createApp(App)
.use(createPinia())
.use(router)
.use(VueAxios, axios)
.mount('#app')
