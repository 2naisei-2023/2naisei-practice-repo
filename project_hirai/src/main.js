import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
/* global Vue */
const app = Vue.createApp({
 data: () => ({
        message:'HELLO Vue.js!'
    })
})