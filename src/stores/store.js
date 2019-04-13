import Vue from 'vue'
import Vuex from 'vuex'
import value from './modules/value'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 100
  },
  getters,      // 可以将该部分内容独立出来、放到 getters.js 中
  mutations: {
    increaseCount(state, num){  // 仅能传一个参数，需要传多个参数、使用对象
      return state.count += num;
      // setTimeout(() => {    // 不推荐这样使用，会导致无法追踪数据何时发生了变化
      //   state.count ++;
      // }, 1000)
    },
    decreaseCount(state){
      state.count -= 5;
    }
  },
  actions: {   // 异步方式
    actionsIncrease(context){  // context 函数，上下文
      setTimeout(() => {
        context.commit("increaseCount", 5)
      }, 1000)
    },
    actionsDecrease(context){
      setTimeout(() => {
        context.commit("decreaseCount", 5);
      }, 1000)
    }
  },
  modules: {   // 将 value.js 内容引入
    value
  }
})
