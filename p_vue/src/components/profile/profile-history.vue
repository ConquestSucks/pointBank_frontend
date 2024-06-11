<template>
    <div class="history">
        <div class="title">
            <span>Здесь будет отображаться ваша история заказов</span>
        </div>
        <div class="orders">
            <Order />
        </div>
    </div>
</template>

    
<script setup>
import Order from './profile-history-item.vue'
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
}
</style>
    