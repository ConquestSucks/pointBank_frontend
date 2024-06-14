<template>
    <div class="autocomplete">
        <input type="text" :placeholder="location"  v-model="inputValue" @input="fetchSuggestions" @focus="fetchSuggestions" @blur="hideSuggestions" />
        <div v-if="showSuggestions">
            <span v-for="(suggestion, index) in suggestions" :key="index" @click="selectSuggestion(suggestion)">
                {{ suggestion }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineModel } from 'vue';
import { API_URL } from '@/store/auth';
import axios from 'axios';

const props = defineProps({
    location: String
})

const emit = defineEmits(['input'])

const inputValue = defineModel('inputValue');
const suggestions = ref([]);
const showSuggestions = ref(false);

const fetchSuggestions = async () => {
    try {
        const response = await axios.get(`${API_URL}/autocomplete/`, {
            params: {
                query: inputValue.value,
            },
        });
        suggestions.value = response.data;
        showSuggestions.value = true;
        emit('input', inputValue.value)
    } catch (error) {
        console.error('Error fetching suggestions:', error);
    }
};

const selectSuggestion = (suggestion) => {
    inputValue.value = suggestion;
    emit('input', inputValue.value)
    showSuggestions.value = false;
};

const hideSuggestions = () => {
    setTimeout(() => {
        showSuggestions.value = false;
    }, 100);
};
</script>

<style lang="scss" scoped>
.autocomplete {
    input {
        width: 100px;
        height: 40px;
        background-color: #E6F2FA;
        border-radius: 10px;
        border: 1px solid #ccc;
        width: 135px;
        font-size: 16px;
        color: #333;
    }
    div {
        position: absolute;
        background-color: #E0FBE2;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        height: 100px;
        min-height: 0px;
        min-width: 135px;
        opacity: 0.9;

        span {
            padding: 2px;
            cursor: pointer;
        }
    }

        /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    display: none;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888;
    display: none;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
}
</style>
