<template>
    <p>count 结果是： {{ count }}</p>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
console.log(mapState(["count", "value"]))

export default {
    computed: {
        // count(){
            // store.js里定义多个变量时，在组件中逐个获取会很麻烦
            // return this.$store.getters.doubleCount;

            // 两个组件代码有重复，所以可以使用 getters 先统一处理数据计算
            // return this.$store.state.count * 2; 
        // }

        // ...mapState(["count", "value"])
        ...mapState(["count"]),
        ...mapGetters(["doubleCount"])
    }
}
</script>