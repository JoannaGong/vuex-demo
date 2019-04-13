const state = {
    value: 10
}

const getters = {
    valueGetters(state){
        return state.value;
    }
}

const mutations = {
    changeValue(state, num){  // value 等于 input 框中输入的值
        state.value = num;
    }
}

const actions = {
    // actionsValue({commit}, num){
    //   commit("changeValue", num)
    // }
}

export default {
    state,
    getters,
    mutations,
    actions
}