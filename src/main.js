// 入口文件

import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
import moment from 'moment'
// 2.1 导入vue-resource
import VueResource from 'vue-resource'
// 导入MUI的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// 按需导入好像没用，所以换直接导入
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 1.3 导入自己的router.js路由模块
import router from './router.js'

// 安装图片预览插件
import VuePreview from 'vue-preview'
// 导入app跟组件
import app from './App.vue'
// 注册Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 1.2安装路由
Vue.use(VueRouter)

// 导入时间格式化插件

// 定义全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

// 2.2 安装vue-resource
Vue.use(VueResource)
Vue.use(Mint)

// 按需导入mint-ui中的组件
// import { Header } from 'mint-ui'
// Vue.component(Header.name, Header)

// import { Swipe, SwipeItem } from 'mint-ui'

// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)

// import { Lazyload } from 'mint-ui'

// Vue.use(Lazyload)

Vue.use(VuePreview)

// 设置请求的根路径
Vue.http.options.root = 'http://47.89.21.179:8080'
// 全局设置post时候表单数据格式的组织形式
Vue.http.options.emulateJSON = true

// 每次进入网站，肯定会调用main.js，在刚调用的时候，先从本地存储中，把购物车的数据读出来，放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
  state: { // this.$store.state.****
    car: car //将购物车中商品的数据，用一个数组存储起来，在car数组中存储一些商品的对象，咱们可以暂时将这个商品对象设计成这个样子 { id:商品的id, count:要购买的数量, price:商品的单价, selected:是否被选中 }
  },
  mutations: { // this.$store.commit('方法名称','按需传递唯一的参数')
    addToCar(state, goodsinfo) {
      // 点击加入购物车，把商品信息保存到store
      // 分析：
      // 1.如果购物车中之前就已经有这个对应的商品了，那么只需要更新数量
      // 2.如果没有，则直接把商品数据push到car中即可

      // 假设在购物车中没有找到对应的商品
      var flag = false
      state.car.some(item=>{
        if(item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      // 如果最终循环完毕得到的flag是false，则直接把商品信息push到数组中
      if(!flag) {
        state.car.push(goodsinfo)
      }


      // 当更新car之后，把car的数组，存储到本地的localStorage中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
      // 修改购物车中的商品数量
      state.car.some(item=>{
        if(item.id === goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })

      // 当修改完商品的数量，把最新的购物车数据保存到本地
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: { // this.$store.getters.***
    // 相当于计算属性，也相当于filters
    getAllCount(state) {
      var c = 0
      state.car.forEach(item=>{
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
          o[item.id] = item.count
      });
      return o
    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app),
  router, // 1.4挂载路由对象到VM实例上
  store
})
