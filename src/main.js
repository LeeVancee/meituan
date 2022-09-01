import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import 'amfe-flexible';
import { Button } from 'vant';

const app = createApp(App);

app.use(Button);
app.use(router);

app.mount('#app');
