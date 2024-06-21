<template>
    <div class="about">
        <div class="about-data">
            <span>Логин: {{ useAuthStore().user.login }}</span>
            <div class="email">
                <span>Почта: {{ useAuthStore().user.email }}</span>
                <span v-if="useAuthStore().user.isEmailConfirmed">Почта подтверждена</span>
                <div class="confirm-email" v-if="!useAuthStore().user.isEmailConfirmed && !useAuthStore().codeCooldown" @click="sendCode">
                    <span>Подтвердить почту</span>
                </div>
                <div class="check-code" v-if="useAuthStore().codeCooldown && !useAuthStore().user.isEmailConfirmed">
                    <input type="number" min="0" max="9999" oninput="validity.valid||(value='');" v-model="code">
                    <div @click="checkCode(code)">
                        <span>Проверить</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

    
<script setup>
import { useAuthStore, API_URL } from '@/store/auth';
import axios from 'axios';
import { watchEffect } from 'vue';
import Cookies from 'js-cookie';


const sendCode = async () => {
    try {
        const respone = await axios.post(`${API_URL}/send_code/`, { email: useAuthStore().user.email })
        if (respone.status === 200) {
            useAuthStore().codeCooldown = true
            Cookies.set('cooldown', useAuthStore().codeCooldown, { expires: (1 / 1440) * 2 })
            alert("Код для подтверждения был отправлен")
        }
    }
    catch(error) {
        alert("Ошибка отправления")
    }
}

const checkCode = async (code) => {
    try {
        const respone = await axios.post(`${API_URL}/check_code/`, { email: useAuthStore().user.email, code: code })
        if (respone.status === 200) {
            useAuthStore().updateUser({ isEmailConfirmed: true });
            alert("Почта успешно подтверждена")

        }
        else {
            alert("Неверный код подтверждения")
        }
    }
    catch(error) {
        alert("Ошибка подтверждения")
    }
}

watchEffect(
    () => {
        if(useAuthStore().codeCooldown) {
            setTimeout(() => {
                useAuthStore().codeCooldown = false
            }, 60000);
        }
    },
)


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

        .email {
            display: flex;
            flex-direction: row;
            align-items: center;
            column-gap: 15px;

            .confirm-email {
                cursor: pointer;
                border-radius: 15px;
                background-color: #B5E8AF;
                transition: 0.35s;
                padding: 5px;

                &:hover {
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                    transition: 0.35s;
                }
            }

            .check-code {
                display: flex;
                column-gap: 10px;
                input {
                    border-radius: 7px;
                    background-color: #E0FBE2;
                    font-weight: 900;
                    height: 25px;
                    width: 50px;
                }

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                div {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    border-radius: 15px;
                    background-color: #B5E8AF;
                    transition: 0.35s;
                    padding: 5px;
                }
            }

        }
    }
}
</style>
    