<template>
    <div class="goods-list">

        <!-- <router-link :to="'/home/goodsinfo/' + item.id" tag="div" class="goods-item" v-for="item in goodslist" :key="item.id">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link> -->

        <!-- 
            在网页中有两种跳转方式：
            方式1：使用a标签的形式叫做标签跳转
            方式2：使用window.locatiion-href的形式，叫做编程式导航
         -->
        <div @click="goDetail(item.id)" class="goods-item" v-for="item in goodslist" :key="item.id">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

        <mt-button @click="getMore" type="danger" size="large">加载更多</mt-button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                goodslist: [], // 存放商品列表的数组
                pageindex: 1 // 分页的页数
            }
        },
        created() {
            this.getGoodsList()
        },
        methods: {
            getGoodsList() {
                // 获取商品列表
                this.$http.get('api/getgoods?pageindex=' + this.pageindex).then(result => {
                    if (result.body.status === 0) {
                        // this.goodslist = result.body.message
                        this.goodslist = this.goodslist.concat(result.body.message)

                    }
                })
            },
            getMore() {
                this.pageindex++
                this.getGoodsList()
            },
            goDetail(id) {
                // 使用js的形式进行路由导航
                // 1.最简单的
                // this.$router.push('/home/goodsinfo/' + id)

                // 2.传递对象
                this.$router.push({ path: '/home/goodsinfo/' + id })

                // 3.传递命名的路由
                // this.$router.push({ name: 'goodsinfo', params: { id: id } })

                // 4.传递命名的路由 传递形式为?id=id
                // this.$router.push({ path: '/home/goodsinfo/', query: { id: id } })
            }
        }
    }
</script>

<style scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
    }

    .goods-list .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
    }

    .goods-list .goods-item img {
        width: 100%;
    }

    .goods-list .goods-item .title {
        font-size: 14px;
    }

    .goods-list .goods-item .info {
        background-color: #eee;
    }

    .goods-list .goods-item .info p {
        margin: 0;
        padding: 5px;
    }

    .goods-list .goods-item .info .price .now {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }

    .goods-list .goods-item .info .price .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }

    .goods-list .goods-item .info .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
</style>