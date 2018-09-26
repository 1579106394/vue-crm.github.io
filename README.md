# 这是一个牛逼的项目

## 我们是兄弟，我怎么会鸽你呢

### 我已经在路上了

#### 咕咕咕咕

# 哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或

# 用传统的命令行方式把修改后的代码上传到github
1.git add
2.giit commit -m “提交信息”
3.git push

## 制作首APP组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
 + 在制作购物车小图标的时候，操作会相对多一些
 + 先把扩展图标的css样式拷贝到项目中
 + 拷贝扩展字体库ttf文件，到项目中
 + 为购物车小图标添加如下样式 'mui-icon mui-icon-extra mui-icon-extra-cart'
3.要在中间区域放置一个router-view来展示路由匹配到的组件


## 改造tabbar为router-link


## 设置路由高亮

## 点击tabbar中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1.获取数据，使用vue-resource
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据，要保存到data身上
4.使用v-for循环渲染每个item项

## 改造九宫格区域的样式

## 改造新闻资讯路由链接

## 新闻资讯 页面制作
1.绘制界面，使用MUI中的media-list.html
2.使用vue-resource获取数据
3.渲染真实数据

## 实现新闻列表点击跳转到新闻详情
1.把列表中的每一项改造为router-link，同时在跳转的时候，应该提供唯一的id标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在路由模块中，将新闻详情的路由地址和组件页面对应起来