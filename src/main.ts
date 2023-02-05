import { createApp } from 'vue';
import { store } from '@/stores/index';
import router from '@/routers/index';
import App from './App.vue';
import './style.css';

const app = createApp(App);
// app.use(router).use(store).mount('#app');
app.use(router, store).mount('#app');
