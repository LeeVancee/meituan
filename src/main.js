import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'amfe-flexible'
import {
  Button,
  Icon,
  Tab,
  Tabs,
  TreeSelect,
  Stepper,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  Toast,
  Checkbox,
  CheckboxGroup,
  SubmitBar
} from 'vant'
import 'vant/lib/index.css'
import './common/css/base.less'

const app = createApp(App)

app
  .use(Button)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(TreeSelect)
  .use(Stepper)
  .use(ActionBar)
  .use(ActionBarIcon)
  .use(ActionBarButton)
  .use(Toast)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(SubmitBar)
app.use(router)
app.use(createPinia())

app.mount('#app')
