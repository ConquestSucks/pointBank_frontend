<template>
    <div class="ticket">
        <div>
            <span>Отправление:</span>
            <span>{{ data.departure }}</span>
        </div>
        <div>
            <span>{{ data.from_location }} - {{ data.to_location }}</span>
        </div>
        <div>
            <span>Прибытие:</span>
            <span>{{ data.arrival }}</span>
        </div>
    </div>
</template>
      
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
      data: Object,
   })
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
        height: 100%;
        align-items: center;
    }
}
    
    
</style>
    