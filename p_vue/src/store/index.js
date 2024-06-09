import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
    state: () => ({
        authorized: false
    })
})