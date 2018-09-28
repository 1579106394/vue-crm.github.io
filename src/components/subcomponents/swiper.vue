<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中使用v-for循环的话，一定要使用key -->
            <!-- 将来，谁使用此轮播图组件，谁为我们传递lunbotuList -->
            <!-- 此时，lunbotuList应该是父组件向子组件船只来设置 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <img :src="item.img" alt="" :class="{ full: isfull }">
            </mt-swipe-item>
        </mt-swipe>
    </div>

    <!-- 
        分析：为什么商品评论中的轮播图那么丑
        1.首页中的图片，它的快和高都是使用了100%的宽度
        2.在商品详情页面中，轮播图的图片如果也使用宽高为100%的话，页面不好看
        3.商品详情页面中的轮播图，期望高度是100%，但是宽度自适应
        4.经过分析，得到问题的原因：首页中的轮播图和详情中的轮播图分歧点是 宽度到底是100%还是自适应
        5.既然这两个轮播图其他方面都是没有冲突的，只是宽度有分歧，那么我们可以定义一个属性，让使用轮播图的调用者手动指定是否为100%的宽度
    -->



</template>

<script>
    export default {
        data() {
            return {}
        },
        props: [
            "lunbotuList",
            "isfull"
        ]
    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }

    .mint-swipe .mint-swipe.item {
        text-align: center;
    }

    .mint-swipe-item img {
        /* width: 100%; */
        height: 100%;
    }


    .full {
        width: 100%;
    }
</style>