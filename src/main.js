import { createApp } from 'vue'
import router from '@/router'
import './assets/main.css'
// Since, we're not using scss, we have to put the following one in here
import 'primeicons/primeicons.css'
// Adding Toasting Notification
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'

const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount('#app');
