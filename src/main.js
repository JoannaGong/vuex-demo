import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'
// import axios from 'axios'
import { Layout, Input, Select, Checkbox } from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"

Vue.config.productionTip = false
Vue.use(Layout)
Vue.use(Input)
Vue.use(Select)
Vue.use(Checkbox)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
