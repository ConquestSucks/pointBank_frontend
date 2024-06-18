<template>
    <div class="order">
        <div class="route">
            <span>Маршрут: {{ data.from_location }} - {{ data.to_location }}</span>
        </div>
        <div class="from">
            <span>Отправление: {{ useAuthStore().formatData(data.departure) }}</span>
        </div>
        <div class="to">
            <span>Прибытие: {{ useAuthStore().formatData(data.arrival) }}</span>
        </div>
    </div>
</template>

    
<script setup>
import { defineProps } from 'vue';
import { useAuthStore } from '@/store/auth';

const props = defineProps({
    data: Object
})
</script>

<style scoped lang="scss">
.order {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px;
    grid-column-gap: 50px;
    grid-row-gap: 0px;
    height: 50px;
    width: 100%;
    border-radius: 15px;
    transition: 0.5s;

    &:hover {
        transition: 0.5s;
    }

    .route {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 15px;
        
        span {
            text-align: left;
        }
    }

    .from, .to {
        display: flex;  
        align-items: center;   
    }
    
}
</style>
    