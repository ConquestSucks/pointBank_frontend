<template>
<div class="main">
    <div class="wrap">
        <div class="title">
            <div>
                <span>Купить билет на автобус</span>
                <span>{{ from }} - {{ to }}</span>
            </div>
        </div>
        <div class="data">
            <div class="custom-input-container">
                <input type="text" class="custom-input" placeholder="Откуда" v-model="from">
            </div>
            <div class="custom-input-container">
                <input type="text" class="custom-input" placeholder="Куда" v-model="to">
            </div>
            <div class="custom-input-date">
                <input type="date" class="custom-input" max="2025-12-31" min="2024-06-07" v-model="date">
            </div>
        </div>
        <div class="search">
            <div class="search_button" @click="getData">
                <span>Найти</span>
            </div>
        </div>
    </div>
    <div class="tickets">
        <div class="tickets-title">
            <span>Результаты: {{ tickets === null ? "": tickets.length}}</span>
        </div>
        <div class="list">
            <Ticket :data="item" :key="index" v-for="(item, index) in tickets"/>
        </div>
    </div>
</div>
</template>
  
<script setup>
import axios from 'axios';
import { ref, defineModel } from 'vue';
import { API_URL } from '@/store/auth';

import Ticket from "./ticket-item.vue"

let tickets = ref(null)
const from = defineModel("from")
const to = defineModel("to")
const date = defineModel("date")

const getData = async () => {
    axios.get(`${API_URL}/tickets/`, {
        params: {
          from_location: from,
          to_location: to,
          departure: date,
        }
      })
      .then(response => {
        tickets.value = response.data;
        console.log(tickets.value)
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
      });
}

</script>

<style scoped lang="scss">

.main {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    height: 100%;
    .wrap {
        background-color: #BFF6C3;
        height: 30%;
        border-radius: 10px;
        display: flex;
        row-gap: 15px;
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
        
        .data {
            .custom-input-container {
                position: relative;
                display: inline-block;

                .custom-input {
                    width: 100px;
                    height: 40px;
                    background-color: #E6F2FA;
                    border-radius: 10px;
                    border: 1px solid #ccc;
                    padding-left: 30px; 
                    font-size: 16px;
                    color: #333;
                }
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
        }

        .custom-input-date {
            position: relative;
            display: inline-block;
            .custom-input {
                width: 150px;
                height: 40px;
                background-color: #E6F2FA;
                border-radius: 10px;
                border: 1px solid #ccc;
                padding-left: 10px; 
                font-size: 16px;
                color: #333;
                cursor: pointer;
            }

            
            .custom-input::-webkit-calendar-picker-indicator {
                opacity: 1;
                cursor: pointer;
                filter: invert(59%) sepia(39%) saturate(596%) hue-rotate(352deg) brightness(92%) contrast(87%);
            }

            
            .custom-input::-webkit-inner-spin-button,
            .custom-input::-webkit-clear-button {
                display: none;
            }

            
            .custom-input::placeholder {
                color: transparent;
            }
        }

        .search {
            display: flex;
            justify-content: center;
            width: 100%;
            .search_button {
                display: flex;
                justify-content: center;
                background-color: #E0FBE2;
                border-radius: 15px;
                width: 20%;
                cursor: pointer;
            }
        }
    }

    .tickets {
        display: flex;
        flex-direction: column;
        background-color: #BFF6C3;
        border-radius: 10px;
        height: 65%;
        row-gap: 20px;

        .tickets-title {
            display: flex;
            justify-content: center;
        }

        .list {
            display: flex;
            flex-direction: column;
            row-gap: 15px;

            .ticket {
                display: flex;
                column-gap: 50px;
                justify-content: center;
                padding: 5px;
                background-color: #E0FBE2;

                div:nth-child(1), div:nth-child(3)  {
                    display: flex;
                    flex-direction: column;
                }

                div:nth-child(2) {
                    display: flex;
                    height: 100%;
                    align-items: center;
                }
            }
        }
    }
}

</style>
