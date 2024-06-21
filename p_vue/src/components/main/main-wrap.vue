<template>
<div class="main">
    <div class="wrap">
        <div class="title">
            <div>
                <span>Купить билет на автобус</span>
                <span>{{ fromLocation }} - {{ toLocation }}</span>
            </div>
        </div>
        <div class="data">
            <div class="custom-input-container">
                <autocomplete v-model="fromLocation" :location="'Откуда'" @input="i => fromLocation = i"/>
            </div>
            <div class="custom-input-container">
                <autocomplete v-model="toLocation" :location="'Куда'" @input="i => toLocation = i"/>
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
    <div class="tickets" v-show="show">
        <div class="tickets-title">
            <span>Результаты: {{ tickets === null ? "": tickets.length}}</span>
        </div>
        <div class="list">
            <Ticket :data="ticket" v-for="ticket in tickets" :key="ticket.id" @buy-ticket="id => reserveTicket(id)"/>
        </div>
    </div>

    <a href="https://freekassa.ru" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.freekassa.ru/banners/big-red-2.png" title="Прием платежей на сайте">
    </a>
</div>
</template>
  
<script setup>
import axios from 'axios';
import Autocomplete from '@/components/input-autocomplete.vue';
import { ref, defineModel } from 'vue';
import { API_URL, useAuthStore } from '@/store/auth';

import Ticket from "./ticket-item.vue"

let tickets = ref(null)
const fromLocation = defineModel("fromLocation")
const toLocation = defineModel("toLocation")
const date = defineModel("date")
const show = ref(false)

const getData = async () => {
    axios.get(`${API_URL}/tickets/`, {
        params: {
            from_location: fromLocation.value,
            to_location: toLocation.value,
            departure_date: date.value,
        }
      })
      .then(response => {
        tickets.value = response.data;
        show.value = true
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
      });
};

const reserveTicket = async (ticketId) => {
    try {
        const response = await axios.post(
        `${API_URL}/buy_ticket/`,
        { ticket_id: ticketId },
        {
            headers: {
                Authorization: `Bearer ${useAuthStore().accessToken}`,
            },
        }
        );
        if (response.status === 200) {
            alert(response.data.message);

        }
    } catch (error) {
        console.error('Unable to buy ticket', error);
    }
};

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
        border-radius: 15px;
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
            display: flex
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
