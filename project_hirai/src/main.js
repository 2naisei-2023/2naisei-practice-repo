/*global createApp*/
/*global Vue*/
import Vue from 'vue';
import App from './App.js';
createApp(App).mount('#app');
const app = Vue.createApp({
 data: () => ({
        message:'HELLO Vue.js!'
    })
}) ;
app.mout('#app');



