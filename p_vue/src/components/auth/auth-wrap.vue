<template>
    <div class="auth">
        <div class="auth-wrap">
            <div class="change">
                <div class="sign-in" @click="changeVisability(1)" ref="signin">
                    <span>Войти</span>
                </div>
                <div class="sign-up" @click="changeVisability(0)" ref="signup">
                    <span>Зарегистрироваться</span>
                </div>
            </div>
            <div class="change-data">
                <SingIn v-if="change"/>
                <SingUp v-else/>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import SingIn from './sign-in.vue'
import SingUp from './sign-up.vue'
const signin = ref()
const signup = ref()
let change = ref(1)

const changeVisability = (val) => {
    if (val == 0) {
        change.value = 0
        signup.value.style.background = "#B0EBB4"
        signin.value.style.background = "#E0FBE2"
    }
    else {
        change.value = 1
        signin.value.style.background = "#B0EBB4"
        signup.value.style.background = "#E0FBE2"
    }
}

</script>

<style scoped lang="scss">
.auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100%;

    .auth-wrap {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        align-items: center;
        background-color: #BFF6C3;
        border-radius: 15px;
        padding: 15px;
        height: 60%;
        width: 30%;

        .change {
            display: flex;
            column-gap: 15px;
            height: fit-content;
            width: 100%;

            div {
                display: flex;
                justify-content: center;
                padding: 5px;
                background-color: #E0FBE2;
                border-radius: 10px;
                height: 5vh;
                width: 45%;
                align-items: center;
                cursor: pointer;
                transition: 0.35s;

                &:hover {
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                    transition: 0.35s;
                }

                span {
                    color: black;
                    font-weight: 900;
                    font-size: 15px;
                }
            }
        }

        .change-data {
            display: flex;
            justify-content: center;
            height: 80%;
            width: 80%;
        }
    }
}
</style>
    