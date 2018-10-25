<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <!-- 商品列表项区域 -->
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img :src="item.thumb_path" alt="">
                        <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥{{ item.sell_price }}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                                <!-- 
                                    问题：如何从购物车中获取商品的数量
                                    1.我们可以先创建一个空对象，然后循环购物车中所有商品的数据，把当前循环这条商品的ID，作为对象的属性名，count值作为对象的属性值
                                    这样。当把所有的商品循环一遍，就会得到一个对象：{ 88: 2, 89: 1, 90: 4 }
                                 -->
                                <a href="#">删除</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <!-- 结算区域 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from '../subcomponents/shopcar_numbox.vue'
    export default {
        data() {
            return {
                goodslist: [] // 购物车中所有商品的数据
            }
        },
        created() {
            this.getGoodsList()
        },
        methods: {
            getGoodsList() {
                // 1.获取到store中所有商品的Id，然后拼接处一个用逗号分隔的字符串
                var idArr = []
                this.$store.state.car.forEach(item => {
                    idArr.push(item.id)
                });
                console.log(idArr.length, '')
                // 如果购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
                if (idArr.length <= 0) {
                    return
                }
                // 获取购物车商品列表
                this.$http.get('api/goods/getshopcarlist/' + idArr.join(",")).then(result=>{
                    // 接口有问题，拿不到数据
                    if(result.body.status === 0) {
                        this.goodslist = result.body.message
                    }
                })
            }
        },
        components: {
            numbox
        }
    }
</script>

<style scoped>
    .shopcar-container {
        background-color: #eee;
        overflow: hidden;
    }

    .shopcar-container .goods-list img {
        width: 60px;
        height: 60px;
    }

    .shopcar-container .goods-list h1 {
        font-size: 13px;
    }

    .shopcar-container .goods-list .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .shopcar-container .goods-list .info .price {
        color: red;
        font-weight: bold;
    }

    .shopcar-container .goods-list .mui-card-content-inner {
        display: flex;
        align-items: center;
    }
</style>