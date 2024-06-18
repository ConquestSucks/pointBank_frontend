<template>
    <div class="order">
        <div class="route">
            <div>
                <span>Маршрут: {{ data.from_location }} - {{ data.to_location }}</span>
            </div>
        </div>
        <div class="from">
            <div>
                <span>Отправление: {{ useAuthStore().formatData(data.departure) }}</span>  
            </div>
        </div>
        <div class="to">
            <div>
                <span>Прибытие: {{ useAuthStore().formatData(data.arrival) }}</span>      
            </div>
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
        justify-content: center;
        padding: 15px;

        div {
            width: 80%;
            justify-content: flex-start;
        }
        
        span {
            text-align: left;
        }
    }

    .from, .to {
        display: flex;  
        align-items: center;   

        div {
            width: 80%;
            justify-content: flex-start;
        }
    }
    
}
</style>
    