<template>
    <div class="sign-up">
        <form>
            <div class="input-data">
                <input type="text" placeholder="Логин" v-model="username">
                <input type="email" placeholder="Почта" v-model="email" :class="{ err : errEmail }">
                <input type="password" placeholder="Пароль" v-model="password" :class="{ err : errPassword }">
                <input type="password" placeholder="Введите пароль еще раз" v-model="confirmPassword" :class="{ err : errPassword }">
            </div>
            <div class="submit" @click="register(username, password, confirmPassword, email)">
                <span>Зарегистрироваться</span>
            </div>
        </form>
    </div>
    </template>
      
<script setup>
import { defineModel, ref, watchEffect } from "vue";
import { useAuthStore } from "@/store/auth";

const username = defineModel('username')
const email = defineModel('email');
const password = defineModel('password');
const confirmPassword = defineModel('confirmPassword');
const errPassword = ref(false)
const errEmail = ref(false)

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const register = async (username, password, confirmPassword, email) => {
    if(confirmPassword != password) {
            errPassword.value = true
            console.log("password err", errPassword.value)
        }
    if (!validateEmail(email)) {
        errEmail.value = true
        console.log("email err", errEmail.value, validateEmail(email))
    }
    else {
        await useAuthStore().register(username, password, email);
    }
}

watchEffect(
    () => {
        if(errPassword.value) {
            setTimeout(() => {
                errPassword.value = false
            }, 1000);
        }
        if(errEmail.value) {
            setTimeout(() => {
                errEmail.value = false
            }, 1000);
        }
    },
)

</script>
    
<style scoped lang="scss">

.sign-up {
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
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 10px;

            input {
                border-radius: 15px;
                background-color: #E0FBE2;
                border: 0;
                width: 100%;
                font-weight: 900;
                height: 50px;
                transition: 0.35s;
            }
            
            .err {
                background-color: #FF6969;
                }

            input:focus {
                outline: 0;
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
            font-weight: bolder;
            transition: 0.35s;

            &:hover {
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                transition: 0.35s;
            }
        }
    }
}
</style>
    