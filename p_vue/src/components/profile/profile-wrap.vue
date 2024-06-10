<template>
    <div class="profile">
        <div class="wrap">
            <div class="list">
                <ProfileItem  :key="index" v-for="(item, index) in data" :title="item" @click="change(index)"/>
            </div>  
            <div class="current">
                <span>{{ authStore.user }}</span>
            </div>    
        </div>   
    </div>
</template>

    
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import ProfileItem from "./profile-item.vue"
import { useAuthStore } from '@/store/auth';

const data = ref(["Об аккаунте", "История заказов", "Выйти"])
const authStore = useAuthStore();
const router = useRouter()

const change = (index) => {
    if(index==2){
        authStore.logout()
        router.push('/auth')
    }
}

onMounted(async () => {
    if (!authStore.user) {
        await authStore.fetchProfile();
    }
})

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
            margin-block-start: 15px;
            background-color: #B5E8AF;
            height: 70%;
            border-radius: 25px;

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
    