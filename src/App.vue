<template>
  <a-layout id="app">
    <a-layout-header class="header clearfix">
      <router-link to="/home" tag="div" class="nav">网站导航</router-link>
      <ul class="login">
        <router-link tag="li" to="/dashboard">Dashboard</router-link>
        <router-link tag="li" to="/login">登录</router-link>
        <router-link tag="li" to="/register">注册</router-link>
      </ul>
    </a-layout-header>
    <a-layout-content class="home">
      <div class="container">
        <div>
          <h1>Vuex</h1>
          <app-button></app-button>
          <!-- <app-button @update="update"></app-button> -->
          <hr>
          <app-count></app-count>
          <!-- <app-count :count="count"></app-count> -->
          <hr>
          <another-count></another-count>
          <hr>
          <!-- 双向数据绑定   -->
          <!-- <input type="text" class="form-control" v-model="valueGetters" @input="changeValue($event.target.value)" > -->
          <input type="text" class="form-control" v-model="valueGetters" >
          <p>{{ valueGetters }}</p>
          <hr>
        </div>

        <router-view></router-view>
      </div>
    </a-layout-content>

  </a-layout>
</template>

<script>
import Button from "./components/Button"
import Count from "./components/Count"
import AnotherCount from "./components/AnotherCount"
import {mapMutations, mapState} from 'vuex'

export default {
  data(){
    return {
      // count: 0
    }
  },
  components: {
    "app-button": Button,
    "app-count": Count,
    "another-count": AnotherCount
  },
  computed: {
    ...mapState(["value"]),  // 双向数据绑定方法一
    valueGetters: {         // 双向数据绑定方法二
      get(){
        return this.$store.getters.valueGetters
      },
      set(num){
        this.$store.commit("changeValue", num)
      }
    }
  },
  methods: {
  //   update(event){
  //     this.count += event
  //   }
    ...mapMutations(["changeValue"])
  },
}
</script>

<style lang="scss">
body, ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;

  .header {
    color: #fff;
    // font-weight: bold;
    font-size: 20px;
  }
  .nav {
    float: left;
    cursor: pointer;
  }
  .login li {
    float: right;
    height: 64px;
    line-height: 64px;
    padding: 0 15px;
    cursor: pointer;
  }
}

.clearfix::before, .clearfix::after {
  display: block;
  content: '';
}
.clearfix::after {
  clear: both;
}

</style>
