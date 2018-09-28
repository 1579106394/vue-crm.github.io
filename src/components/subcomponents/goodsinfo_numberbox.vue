<template>
    <!-- 
        我们不知道什么时候能拿到max值，但是总会有一刻能拿到max的值
        我们可以使用watch属性监听来监听父组件传递过来的max值，不管watch会触发几次，但是最后一次肯定是一个合法的max值
     -->
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" value="1" @change="countChanged" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>


    <!-- 
        分析：子组件什么时候把数据传递给父组件

     -->
</template>

<script>

    import mui from '../../lib/mui/js/mui.min'

    export default {
        mounted() {
            // 初始化数字选择框组件
            mui('.mui-numbox').numbox()
        },
        methods: {
            countChanged() {
                // 每当文本框的数据被修改的时候，立即把最新的数据通过事件调用，传递给父组件
                // console.log(this.$refs.numbox.value)
                this.$emit('getcount', parseInt(this.$refs.numbox.value))
            }
        },
        props: [
            "max"
        ],
        watch: {
            'max': function(newVal, oldVal) {
                this.max = newVal
                // 使用JS形式
                // mui(".mui-numbox").numbox().setOption('max', newVal)
            }
        }
    }
</script>

<style scoped>
</style>