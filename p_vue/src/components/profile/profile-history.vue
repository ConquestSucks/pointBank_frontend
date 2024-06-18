<template>
    <div class="history">
        <div class="title">
            <span>Здесь будет отображаться ваша история заказов</span>
        </div>
        <div class="orders">
            <Order :data="ticket" :key="index" v-for="(ticket, index) in tickets" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Order from './profile-history-item.vue';
import { API_URL, useAuthStore } from '@/store/auth';

const tickets = ref([]);

const fetchUserTickets = async () => {
    try {
        const response = await axios.get(`${API_URL}/user_tickets/`, {
            headers: {
                Authorization: `Bearer ${useAuthStore().accessToken}`,
            },
        });
        tickets.value = response.data;
    } catch (error) {
        console.error('Error fetching user tickets:', error);
        if (error.response.status === 401) {
            const newAccessToken = await useAuthStore().refreshToken();
            if (newAccessToken) {
                await fetchUserTickets();
            }
        } else {
            alert('Ошибка при получении купленных билетов');
        }
    }
};

onMounted(() => {
    fetchUserTickets();
});
</script>

<style scoped lang="scss">
.history {
    display: flex;
    flex-direction: column;
    row-gap: 50px;

    .title {
        display: flex;
        justify-content: center;
    }

    .orders {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        height: 300px;
        width: 100%;
        overflow-y: scroll;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
}
</style>
