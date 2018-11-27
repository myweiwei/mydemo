#刘宇薇的小项目
#头部mint-ui 底部mui
+底部购物车图标部分需引入css,ttf文件
+加入类名`mui-icon mui-icon-extra mui-icon-extra-cart`
#页面切换用vue-router
+设置路由高亮在route.js `linkActiveClass: 'mui-active'`
#首页轮播图用mint-ui,需要手动设置高度

#增加首页的六宫格 
+用mui的grid-default.html
+然后更换图标和文字，调整样式

#新闻列表界面
+列表布局用mui的media-list newsList.vue

#新闻详情
+点开新闻列表任一项，传该条id过去获取详情信息 newsInfo.vue

#评论组建
+因很多界面都有评论部分，所以单独定义一个评论组建，在newsInfo.vue中引入，并在components中注册组建，以标签形式引入。
+当评论区没填写内容，会弹框请填写评论，用mint-ui的toast,在comment.vue中引用toast可用，在main中引入不可用，不知道原因
+评论时间 main.js定义全局过滤器formateDate 在时间后加管道符调用 {{item.time | formateDate('YMDHMS')}}

