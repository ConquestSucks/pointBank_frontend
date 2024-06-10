<template>
    <div class="navbar">
        <router-link to="/">
            <div class="logo">
                <img src="../assets/logo.png">
            </div>
        </router-link>
            <div class="buttons">
                <span>Контакты</span>
            </div>  
            <div class="buttons">
                <span>Маршруты</span>
            </div>  
        <router-link v-if="!store.$state.accessToken" to="/auth" class="link">
            <div class="buttons">
                <span>Войти</span>
            </div>
        </router-link>
        <router-link v-if="store.$state.accessToken" to="/myprofile" class="link">
            <div class="buttons">
                <span>Аккаунт</span>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/store/auth.js"
const store = useAuthStore()

</script>


<style scoped lang="scss">

.link {
    text-decoration: none;
}

.navbar {
    border-radius: 30px;
    font-family: "Quicksand", sans-serif;
    display: flex;
    align-items: center;
    background-color: #B0EBB4;
    height: 50px;
    display: flex;
    padding: 5px;
    margin: 5px;
    justify-content: space-between;

    .logo {
        img {
            pointer-events: none;
            padding: 5px;
            width: 140px;
            height: 50px;
            cursor: pointer;
        }
    }

    .buttons {
        display: flex;
        padding: 5px;
        align-items: center;
        border-radius: 10px;
        height: fit-content;
        text-align: center;
        cursor: pointer;
        transition: 0.5s;


        span {
            color: black !important;
            font-size: medium;
            font-weight: 400;
            color:#AFC4D3;
        }

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: 0.5s;
        }
    }
}
</style>
