<template>
    <div class="dashboard text-center">
        <h1>控制台</h1>
        <p>访问控制台需要登录</p>
        <p>用户的邮箱是：{{ email }}</p>
    </div>
</template>

<script>
import axios from 'axios'      // 将注册获得的信息，展示在dashboard页面
import axios from '../axios-new'  // 使用另一份axios接口请求时，该这样引入

export default {
    data(){
        return {
            email: ""
        }
    },
    created(){
        // axios请求头类型，参考 https://github.com/axios/axios 中的request config
        axios.get("/user.json")
        .then( (data) => {
            const arr = [];
            for(let key in data.data){
                let myData = data.data[key]
                myData.id = key
                console.log(myData);
                arr.push(arr)
            }
            this.email = arr[0].email
            
        }, (err) => {
            console.log(err);
        } )
    }

}
</script>


<style scoped lang="scss">
    .dashboard p {
        color: red;
    }
</style>