<template>
    <div class="about">
        <div class="about-data">
            <span>Логин: {{ useAuthStore().user.login }}</span>
            <span>Почта: {{ useAuthStore().user.email }}</span>
        </div>
    </div>
</template>

    
<script setup>
import { useAuthStore } from '@/store/auth';


</script>

<style scoped lang="scss">
.about {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    .about-data {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        width: 40%;
        margin-left: 15px;
        margin-top: 15px;
    }
}
</style>
    