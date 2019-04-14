import axios from 'axios'

// 配置另一份请求
const instance = axios.create()
instance.defaults.baseURL = "https://myapp-72ed0.firebaseio.com"
instance.defaults.headers.common["Accept"] = "application/json"

export default instance