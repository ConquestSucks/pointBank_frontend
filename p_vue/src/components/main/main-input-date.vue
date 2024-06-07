<template>
    <div class="custom-input-container">
        <input type="date" class="custom-input" max="2025-12-31" min="2024-06-07">
    </div>
</template>
  
<script setup>


</script>

<style scoped lang="scss">
        .custom-input-container {
            position: relative;
            display: inline-block;
        }

        .custom-input {
            width: 150px;
            height: 40px;
            background-color: #E6F2FA;
            border-radius: 10px;
            border: 1px solid #ccc;
            padding-left: 10px; /* Отступ слева */
            font-size: 16px;
            color: #333;
            cursor: pointer;
        }

        /* Скрытие встроенного значка календаря */
        .custom-input::-webkit-calendar-picker-indicator {
            opacity: 1;
            cursor: pointer;
            filter: invert(59%) sepia(39%) saturate(596%) hue-rotate(352deg) brightness(92%) contrast(87%);
        }

        /* Стили для других браузеров */
        .custom-input::-webkit-inner-spin-button,
        .custom-input::-webkit-clear-button {
            display: none;
        }

        /* Скрытие плейсхолдера */
        .custom-input::placeholder {
            color: transparent;
        }
</style>
