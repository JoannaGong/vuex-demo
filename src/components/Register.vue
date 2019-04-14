<template>
    <div class="register">
        <form>
            <div class="filed text-left">
                <label for="email">邮箱</label>
                <a-input type="email" v-model="email" />
            </div>
            <div class="filed text-left">
                <label for="age">年龄</label>
                <a-input type="text" v-model="age" />
            </div>
            <div class="filed text-left">
                <label for="password">密码</label>
                <a-input type="password" v-model="password" />
            </div>
            <div class="filed text-left">
                <label for="password">确认密码</label>
                <a-input type="password" v-model="confirmPassword" />
            </div>
            <div class="filed text-left">
                <label for="nation">国籍</label><br>
                <a-select defaultValue="China" style="width: 80px"  v-model="country">
                    <a-select-option value="China">China</a-select-option>
                    <a-select-option value="South Korea">South Korea</a-select-option>
                    <a-select-option value="Japanese">Japanese</a-select-option>
                </a-select>
            </div>
            <div class="filed text-left">
                <a-checkbox @change="onChange">同意条款</a-checkbox>
            </div>
            <button type="submit" class="btn btn-default btn-sm" @click.prevent="onSubmit">提交</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            country: '',
            terms: false
        }
    },
    methods: {
        onChange (e) {
            this.terms = e.target.checked
        },
        onSubmit(){
            const formData = {
                email: this.email,
                age: this.age,
                password: this.password,
                confirmPassword: this.confirmPassword,
                country: this.country,
                terms: this.terms
            }
            
            axios.post("/user.json", formData)
            .then( res => {
                console.log(res)
            }, (err) => {
                console.log(err)
            })
        },
        
    }
}
</script>

<style scoped lang="scss">
.register {
    margin: 0 auto;
    width: 400px;
    padding-bottom: 55px;
    border: 1px solid #eee;
    box-shadow: 1px 1px 1px #eee;

    .filed {
        margin: 20px;
    }
    .btn {
        float: left;
        margin-left: 20px;
    }
}

</style>