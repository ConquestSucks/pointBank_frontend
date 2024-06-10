<template>
<div class="sign-in">
    <form>
        <div class="input-data">
            <input type="text" placeholder="Логин" v-model="username">
            <input type="password" placeholder="Пароль" v-model="password">
        </div>
        <div class="reset">
            <a href="#"><span>Забыли пароль?</span></a>
        </div>
        <div class="submit" @click="login(username, password)">
            <span>Войти</span>
        </div>
    </form>
</div>
</template>
  
<script setup>

import { defineModel } from "vue";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "vue-router";

const username = defineModel('username');
const password = defineModel('password');
const router = useRouter();


const login = async () => {
    await useAuthStore().login(username.value, password.value);
    router.push('/myprofile');
}
</script>

<style scoped lang="scss">
.sign-in {
    display: flex;
    justify-content: center;
    width: 100%;
 

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 15px;
        width: 80%;
        height: 100%;

        .input-data {
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 10px;

            input {
                border-radius: 15px;
                background-color: #E0FBE2;
                font-weight: 900;
                border: 0;
                width: 100%;
                height: 50px;
                transition: 0.35s;
            }

            input:focus {
                outline: 0;
            }
        }

        .reset {
            text-align: right;

            a {
                font-size: smaller;
                text-decoration: none;
                color: inherit;
            }
        }

        .submit {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            background-color: #E0FBE2;
            border: 0;
            outline: 0;
            height: 50px;
            cursor: pointer;
            font-weight: 900;
            transition: 0.35s;

            &:hover {
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                transition: 0.35s;
            }
        }
    }
}
</style>
