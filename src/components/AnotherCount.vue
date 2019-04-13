<template>
    <p>another-count 结果是： {{ count }}</p>
</template>

<script>
export default {
    computed: {
        count(){
            // return this.$store.state.count*2
            return this.$store.getters.doubleCount;
        }
    }
}
</script>