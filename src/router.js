import VueRouter from 'vue-router'


// 3.创建路由对象
const router = new VueRouter({
  routes: [ // 配置路由规则
    // account goodslist
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认router-link-active
})

// 把路由对象暴露出去
export default router
