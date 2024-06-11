import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import axios from 'axios';

export const API_URL = 'http://127.0.0.1:8000/api';

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
                    login: username,
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
                    login: username,
                    password: password
                });
                    Cookies.set('access_token', response.data.token, { expires: 7 });
                    this.accessToken = response.data.token;
                    this.user = response.data.user;
                alert('Вы успешно вошли')
            }
            catch(error) {
                console.log(error)
                alert('Что-то пошло не так...')
            }
        },   
        logout() {
            this.user = null;
            this.accessToken = null;
            Cookies.remove('access_token');
        }
    }
})