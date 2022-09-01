import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'amfe-flexible'
import { Button, Icon } from 'vant'
import 'vant/lib/index.css'
import './common/css/base.less'

const app = createApp(App)

app.use(Button).use(Icon)
app.use(router)

app.mount('#app')
