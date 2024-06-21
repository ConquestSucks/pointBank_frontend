<template>
    <div class="ticket">
        <div>
            <span>Отправление:</span>
            <span>{{ useAuthStore().formatData(data.departure) }}</span>
        </div>
        <div>
            <span>{{ data.from_location }} - {{ data.to_location }}</span>
            <span>В пути {{ calculateTravelTime(data.arrival, data.departure) }}</span>
        </div>
        <div>
            <span>Прибытие:</span>
            <span>{{ useAuthStore().formatData(data.arrival) }}</span>
        </div>
        <div v-show="useAuthStore().user.isEmailConfirmed" @click="buyTicket()">
            <span>Забронировать</span>
        </div>
    </div>
</template>
      
<script setup>
import { defineProps, defineEmits } from 'vue'
import { useAuthStore } from '@/store/auth';

const props = defineProps({
      data: Object,
   })

const emit = defineEmits(['buy-ticket'])

const buyTicket = () => {
    emit('buy-ticket', props.data.id)
}

const calculateTravelTime = (arrivalStr, departureStr) => {
    const arrivalDate = new Date(arrivalStr);
    const departureDate = new Date(departureStr);
    const diffMilliseconds = arrivalDate - departureDate;
    const diffMinutes = Math.floor((diffMilliseconds / (1000 * 60)) % 60);
    const diffHours = Math.floor((diffMilliseconds / (1000 * 60 * 60)) % 24);
    const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

    const getDeclension = (number, forms) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return forms[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };

    const result = [
        diffDays ? `${diffDays} ${getDeclension(diffDays, ['день', 'дня', 'дней'])}` : '',
        diffHours ? `${diffHours} ${getDeclension(diffHours, ['час', 'часа', 'часов'])}` : '',
        diffMinutes ? `${diffMinutes} ${getDeclension(diffMinutes, ['минута', 'минуты', 'минут'])}` : '',
    ].filter(Boolean).join(', ');

    return result || '0 секунд';
}
</script>
<style scoped lang="scss">
    
.ticket {
    display: flex;
    column-gap: 50px;
    justify-content: center;
    padding: 5px;
    background-color: #E0FBE2;

    div:nth-child(1), div:nth-child(3)  {
        display: flex;
        flex-direction: column;
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;

        span:last-child {
            font-size: smaller;
        }
    }

    div:last-child {
        display: flex;
        height: 100%;
        align-items: center;
        cursor: pointer;
    }
}
    
    
</style>
    