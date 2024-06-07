<template>
    <div class="navbar">
        <router-link to="/">
            <div class="logo">
                <img src="../assets/logo.png">
            </div>
        </router-link>
        <router-link to="/auth">
            <div class="sign-in-sign-up">
                <span>Войти</span>
            </div>
        </router-link>
    </div>
</template>

<script setup>

</script>


<style scoped lang="scss">

.navbar {
    font-family: "Quicksand", sans-serif;
    display: flex;
    align-items: center;
    background-color: #B0EBB4;
    height: 50px;
    display: flex;
    padding: 5px;
    justify-content: space-between;

    .logo {
        img {
            pointer-events: none;
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
    }

    .sign-in-sign-up {
        display: flex;
        padding: 5px;
        align-items: center;
        border-radius: 10px;
        height: fit-content;
        text-align: center;
        cursor: pointer;
        transition: 0.5s;

        span {
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
