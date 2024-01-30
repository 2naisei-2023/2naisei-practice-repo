/*global createApp*/
/*global Vue*/
import Vue from 'vue';
import App from './App.js';
createApp(App).mount('#app');
export const app = Vue.createApp({
 data: () => ({
        message:'HELLO Vue.js!'
    })
}) ;

/*import App from './App';
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}*/

