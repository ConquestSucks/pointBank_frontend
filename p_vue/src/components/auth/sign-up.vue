<template>
    <div class="sign-up">
        <form>
            <div class="input-data">
                <input type="text" placeholder="Логин" v-model="username">
                <input type="password" placeholder="Пароль" v-model="password">
                <input type="password" placeholder="Введите пароль еще раз" v-model="confirmPassword">
            </div>
            <div class="submit" @click="signUp(username, password, confirmPassword)">
                Зарегистрироваться
            </div>
        </form>
    </div>
    </template>
      
    <script setup>
    import axios from 'axios';  
    import { defineModel } from "vue";

    const username = defineModel('username')
    const password = defineModel('password');
    const confirmPassword = defineModel('confirmPassword');

    async function signUp(username, password, confirmPassword) {
        if (confirmPassword === password)
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/register/', {
                    username: username,
                    password: password,
                    email: 'bravo.bezbashen@mail.ru'
                });

                if (response.status == 201) {
                    alert("Вы успешно зарегистрировались")
                }
                else {
                    alert("ошибка")
                }
            }
            catch(error) {
                console.log(error)
            }
}
    
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

                &:hover {
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                    transition: 0.35s;
                }
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
    