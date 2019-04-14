<template>
    <div class="button">
        <!-- mapMutations 需要传参时，在下面 click 方法中添加@click="actionsIncrease(10)" -->
        <button class="btn btn-default" @click="actionsIncrease">加</button>
        <button class="btn btn-default" @click="actionsDecrease">减</button>
    </div>
</template>

<script>
// 辅助函数的使用（辅助函数不能直接进行双向数据绑定；辅助函数较麻烦，一般使用第三方库组件）
import {mapActions} from 'vuex'

export default {
    methods: {
        // increase(){
            ...mapActions(["actionsIncrease", "actionsDecrease"])

            // this.$store.dispatch("actionsIncrease");

            // mutations 中不允许使用异步方法
            // this.$store.commit("increaseCount", 5);

            // Vue 不推荐在组件中直接改变，否则无法追踪到数据何时发生了变化；可以使用mutations 定义函数，再在组件中调用该函数
            // this.$store.state.count++

            // 原始的自定义函数、来进行组件之间的数据传值
            // this.$emit('update', 1)
        // },
        // decrease(){
        //     this.$store.dispatch("actionsDecrease");

            // this.$store.commit("decreaseCount", 5);
            // this.$store.state.count--
            // this.$emit('update', -1)
        // }
    }
}
</script>