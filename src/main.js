import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'
import axios from 'axios'            // axios 弥补了 vue 没有 ajax 请求
import { Layout, Input, Select, Checkbox } from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"

Vue.config.productionTip = false
Vue.use(Layout)
Vue.use(Input)
Vue.use(Select)
Vue.use(Checkbox)

// 配置全局 axios
axios.defaults.baseURL = "https://myapp-72ed0.firebaseio.com"
//get post common（get 和 post 都可以） 都可以
axios.defaults.headers.common["Accept"] = "application/json"
// post 需要用户的验证，值一般是token
axios.defaults.headers.post["Authorization"] = "123"

// 拦截器 interceptors
axios.interceptors.request.use( config => {
  // console.log(config)  // 显示数据被拦截
  // 可以在此加个 loading 动画效果
  return config;    // 继续执行
})

// 请求响应数据返回前，进行拦截
// 拦截的作用：利用状态码（data.status）结果来进行一些逻辑处理
axios.interceptors.response.use( data => {
  console.log(data);
  return data;
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
