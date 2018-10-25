<template>

        <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input readonly id="test" class="mui-input-numbox" value="initcount" @change="countChanged" ref="numbox"/>
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
                    // 数量改变了
                    // 每当数量值改变，则立即把最新的数量同步到购物车的store中，覆盖之前的数量值
                    this.$store.commit('', { id: this.goodsid, count: this.$refs.numbox.value })
                }
            },
            props: [
                "initcount",
                "goodsid"
            ]
        }
    </script>
    
    <style scoped>
    </style>