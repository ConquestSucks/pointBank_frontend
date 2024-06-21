import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import axios from 'axios';

export const API_URL = process.env.VUE_APP_API_BASE_URL;

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
        accessToken: Cookies.get('access_token') || null,
        refreshToken: Cookies.get('refresh_token') || null
    }),
    actions: {
        async register(username, password, email) {
            try {
                await axios.post(`${API_URL}/register/`, {
                    login: username,
                    password: password,
                    email: email
                });
                alert('Вы успешно зарегистрировались, теперь авторизуйтесь');
            } catch (error) {
                console.error('Error registering user:', error.response ? error.response.data : error.message);
                alert('Ошибка регистрации');
            }
        },
        async login(username, password) {
            try {
                const response = await axios.post(`${API_URL}/login/`, {
                    login: username,
                    password: password
                });

                if (response.status === 200) {
                    this.user = response.data.user;
                    this.accessToken = response.data.access;
                    this.refreshToken = response.data.refresh;
                    Cookies.set('access_token', this.accessToken, { expires: 1 });
                    Cookies.set('refresh_token', this.refreshToken, { expires: 1 });
                    Cookies.set('user', JSON.stringify(this.user), { expires: 1 });
                    alert('Вы успешно вошли');
                } else {
                    console.error('Unexpected response:', response);
                    alert('Что-то пошло не так...');
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('Что-то пошло не так...');
            }
        },
        async refreshToken() {
            try {
                const refreshToken = useAuthStore().refreshToken;
                if (!refreshToken) {
                    console.error('No refresh token available');
                    return null;
                }
                const response = await axios.post(`${API_URL}/refresh_token/`, {
                    refresh: refreshToken,
                });
                if (response.status === 200) {
                    const newAccessToken = response.data.access;
                    useAuthStore().accessToken = newAccessToken;
                    return newAccessToken;
                }
            } catch (refreshError) {
                console.error('Не удалось обновить access token:', refreshError);
                alert('Не удалось обновить токен доступа');
                return null;
            }
        },
        logout() {
            this.user = null;
            this.accessToken = null;
            this.refreshToken = null;
            Cookies.remove('access_token');
            Cookies.remove('refresh_token');
            Cookies.remove('user');
        },
        formatData(data) {
            let date = new Date(data)
            const year = date.getUTCFullYear();
            const month = String(date.getUTCMonth() + 1).padStart(2, '0');
            const day = String(date.getUTCDate()).padStart(2, '0');
            const hours = String(date.getUTCHours()).padStart(2, '0');
            const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        
            return `${year}-${month}-${day} ${hours}:${minutes}`;
        }
    },
});
