import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import axios from 'axios';

export const API_URL = 'http://localhost:8000/api';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        accessToken: Cookies.get('access_token') || null,
    }),
    actions: {
        async register(username, password, email) {
            try {
              await axios.post(`${API_URL}/register/`,
                {
                    username: username,
                    password: password,
                    email: email
                });
                alert('Вы успешно зарегистрировались, теперь авторизуйтесь')
            } catch (error) {
              console.error('Error registering user:', error.response ? error.response.data : error.message);
              alert('Ошибка регистрации')
            }
          },
        async login (username, password) {
            try {
                const response = await axios.post(`${API_URL}/login/`, {
                    username: username,
                    password: password
                });
                    Cookies.set('access_token', response.data.token, { expires: 7 });
                    this.accessToken = response.data.token;
                    this.user = response.data.user;
                alert('Вы успешно вошли')
            }
            catch(error) {
                console.log(error)
                alert('Что-то пошлок не так...')
            }
        },
        async fetchProfile() {
            try {
              const response = await axios.get(`${API_URL}/profile/`, {
                headers: { 'Authorization': `Bearer ${this.accessToken}` }
              });
              this.user = response.data;
            } catch (error) {
              console.error('Error fetching profile:', error.response ? error.response.data : error.message);
              if (error.response && error.response.status === 401) {
                this.logout();
              }
            }
          },
      
        logout() {
            this.user = null;
            this.accessToken = null;
            Cookies.remove('access_token');
        }
    }
})