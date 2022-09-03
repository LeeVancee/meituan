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
  SubmitBar,
  ContactCard,
  Card,
  Dialog,
  AddressList,
  AddressEdit,
  Form,
  Field,
  CellGroup
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
  .use(ContactCard)
  .use(Card)
  .use(Dialog)
  .use(AddressList)
  .use(AddressEdit)
  .use(Form)
  .use(Field)
  .use(CellGroup)
app.use(router)
app.use(createPinia())

app.mount('#app')
