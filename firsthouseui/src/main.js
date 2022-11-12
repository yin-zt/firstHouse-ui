import { createApp } from 'vue'
import Router from './tools/Router';
import Store from './tools/Storage';
import App from './App.vue'


//注入Vue App
const app = createApp(App)
app.use(Router)
app.use(Store)
app.mount('#app')
