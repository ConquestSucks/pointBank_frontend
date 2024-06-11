<template>
    <div class="about">
        <div class="about-data">
            <input type="text" placeholder="Имя">
            <input type="text" placeholder="Фамилия">
            <input type="text" placeholder="Отчество">
            <input type="text" placeholder="Номер телефона">
        </div>
        <div class="about-save">
            <div>
                <span>Сохранить</span>
            </div>
        </div>
    </div>
</template>

    
<script setup>

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

        input {
            border: 0;
            border-radius: 8px;
            height: 30px;
        }
    }

    .about-save {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15%;
            background-color: #B0EBB4;
            border-radius: 15px;
            cursor: pointer;
        }
    }
}
</style>
    