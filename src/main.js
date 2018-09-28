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

var vm = new Vue({
  el: '#app',
  data: {},
  render: c => c(app),
  router // 1.4挂载路由对象到VM实例上
})
