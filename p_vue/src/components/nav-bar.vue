<template>
    <div class="navbar">
        <router-link to="/">
            <div class="logo">
                <img src="../assets/logo.png">
            </div>
        </router-link>
        <router-link to="/contacts" class="link">
            <div class="buttons">
                <span>Контакты</span>
            </div>  
        </router-link>
        <router-link to="/routes" class="link">
            <div class="buttons">
                <span>Маршруты</span>
            </div>  
        </router-link>
        <router-link v-show="!store.$state.accessToken" to="/auth" class="link">
            <div class="buttons">
                <span>Войти</span>
            </div>
        </router-link>

        <router-link v-show="store.$state.accessToken" to="/myprofile" class="link">
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

.hidden {
    display: none;
}

.link {
    text-decoration: none;
    width: max-content;
}

.navbar {
    border-radius: 15px;
    display: flex !important;
    width: 100%;
    align-items: center;
    background-color: #B0EBB4;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    column-gap: 200px;
    .logo {
        img {
            pointer-events: none;
            padding: 15px;
            width: 140px;
            height: 50px;
            cursor: pointer;
        }
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
        transition: 0.5s;


        span {
            font-size: large;
            font-weight: 400;
            color:#ffffff;
        }

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: 0.5s;
        }
    }

    .buttons:last-child {
        margin-right: 20px;
    }
}
</style>
