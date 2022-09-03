import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'amfe-flexible'

import 'vant/lib/index.css'
import './common/css/base.less'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
