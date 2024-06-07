<template>
<div class="wrap">
    <div class="title">
        <div>
            <span>Купить билет на автобус</span>
            <span>какая-то надпись ебучая!</span>
        </div>
    </div>
    <div class="data">
        <input_from :placeholder="'Откуда'"/>
        <input_to :placeholder="'Куда'"/>
        <date_from />
    </div>
    <div class="change">

    </div>
</div>
</template>
  
<script setup>
import input_from from './main-input-location.vue'
import input_to from './main-input-location.vue'
import date_from from './main-input-date.vue'

</script>

<style scoped lang="scss">
.wrap {
    background-color: #BFF6C3;
    height: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .title {
        font-family: "Arimo", sans-serif;;
        color: black;
    
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5px;

            span:last-child {
                font-size: smaller;
                color: black;
            }
        }
    }
}
</style>
