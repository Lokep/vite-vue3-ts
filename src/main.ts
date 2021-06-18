import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import router from "./router";
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import './index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')