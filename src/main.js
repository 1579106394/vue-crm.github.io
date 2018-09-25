// 入口文件

import Vue from 'vue'

// 导入MUI的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 按需导入好像没用，所以换直接导入
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

 
// 按需导入mint-ui中的组件
// import { Header } from 'mint-ui'
// Vue.component(Header.name, Header)





// 导入app跟组件
import app from './App.vue'




var vm = new Vue({
  el: '#app',
  data: {},
  render: c=>c(app)
})