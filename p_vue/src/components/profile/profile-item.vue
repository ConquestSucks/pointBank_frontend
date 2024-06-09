<template>
    <div>
        <span>{{ title }}</span>
    </div>
</template>

    
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    title: String,
 })
</script>

<style scoped lang="scss">
    div {
        background-color: #BFF6C3;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        width: 150px;
        height: 25px;

        span {

        }

        &:hover {
            cursor: pointer;
        }
    }
</style>
    