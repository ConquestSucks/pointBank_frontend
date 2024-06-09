<template>
    <div class="custom-input-container">
        <input type="text" class="custom-input" :placeholder=placeholder>
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
      placeholder: String,
   })
</script>

<style scoped lang="scss">
        .custom-input-container {
            position: relative;
            display: inline-block;
        }

        .custom-input {
            width: 100px;
            height: 40px;
            background-color: #E6F2FA;
            border-radius: 10px;
            border: 1px solid #ccc;
            padding-left: 30px; /* Отступ слева для иконки */
            font-size: 16px;
            color: #333;
        }

        .custom-input-container::before {
            content: '+';
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            color: #D2A86B;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
        }
</style>
