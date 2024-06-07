<template>
    <div class="navbar">
            <div class="logo">
            <img src="../assets/logo.png">
        </div>
        <div class="login-signin">
            <span>Войти</span>
        </div>
    </div>
</template>

<script setup>

</script>


<style scoped lang="scss">

.navbar {
    font-family: "Quicksand", sans-serif;
    display: flex;
    align-items: center;
    background-color: #1B3848;
    height: 50px;
    display: flex;
    padding: 5px;
    justify-content: space-between;

    .logo {
        img {
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
    }

    .login-signin {
        display: flex;
        padding: 5px;
        align-items: center;
        border-radius: 10px;
        height: fit-content;
        text-align: center;
        cursor: pointer;

        span {
            font-size: medium;
            font-weight: 400;
            color:#AFC4D3;
        }

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
    }
}
</style>
