<template>
    <div class="profile">
        <div class="wrap">
            <div class="list">
                <ProfileItem  :key="index" v-for="(item, index) in data" :title="item" @click="change(index)"/>
            </div>  
            <div class="current">
                <About v-if="activeIndex == 0"/>
                <History v-if="activeIndex == 1"/>
            </div>    
        </div>   
    </div>
</template>

    
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import ProfileItem from "./profile-item.vue"
import About from "./profile-about.vue"
import History from "./profile-history.vue"

const data = ref(["Об аккаунте", "История заказов", "Выйти"])
const authStore = useAuthStore();
const router = useRouter()
const activeIndex = ref(0)

const change = (index) => {
    if(index==2){
        authStore.logout()
        router.push('/auth')
    }
    return activeIndex.value = index
}


</script>

<style scoped lang="scss">
.profile {
    height: 100%;

    .wrap {
        padding: 15px;
        display: flex;
        flex-direction: row;
        column-gap: 30px;
        justify-content: center;
        background-color: #B5E8AF;
        height: 70%;
        border-radius: 15px;

        .list {
            display: flex;
            flex-direction: column;
            row-gap: 15px;
        }

        .current {
            background-color: #BFF6C3;
            border-radius: 15px;
            height: 100%;
            width: 90%;
        }
    }
}
</style>
    