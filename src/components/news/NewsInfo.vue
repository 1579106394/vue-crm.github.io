<template>
    <div>
        <h3>新闻详情 {{ id }}</h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id // 将URL地址传递过来的Id值，挂在到data上，方便以后调用
            }
        }
    }
</script>

<style scoped>
    
</style>