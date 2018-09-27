<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active': '']" v-for="item in cates" :key="item.id">
                        {{ item.title }}
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
    // 1.导入mui的js文件
    import mui from '../../lib/mui/js/mui.min';


    export default {
        data() {
            return {
                cates: [], // 所有分类的列表数组
            }
        },
        mounted() { // 生命周期函数 当组件中DOM结构被渲染好并放到页面中后，会执行这个钩子函数
            // 2.初始化滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        created () {
            this.getAllCategory();
        },
        methods: {
            getAllCategory() {
                this.$http.get('api/getimgcategory').then((result) => {
                    if(result.body.status === 0) {
                        // 手动拼接分类列表
                        result.body.message.unshift({ title: "全部", id: "0" })
                        this.cates = result.body.message
                    }
                })
            }
        }
    }

</script>

<style lang="scss" scope>
    * {
        touch-action: pan-y
    }
</style>