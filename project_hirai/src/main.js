import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
export const app = Vue.createApp({
 data: () => ({
        message:'HELLO Vue.js!'
    })
}) 

/*import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
*/