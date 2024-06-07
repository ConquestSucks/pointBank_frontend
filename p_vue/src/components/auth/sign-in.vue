<template>
<div class="sign-in">
    <form>
        <div class="input-data">
            <input type="text" placeholder="Логин">
            <input type="password" placeholder="Пароль">
        </div>
        <div class="reset">
            <a href="#">Забыли пароль?</a>
        </div>
        <input class="submit" type="submit" value="Войти">
    </form>
</div>
</template>
  
<script setup>


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
                    &:hover {
                        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                        transition: 0.35s;
                    }
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
