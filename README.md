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

#图片分享组建photoList.vue
	+顶部滑动条，用mui中的tab-top-webview-main.html。不需要全屏 去掉mui-fullscreen类
	+滑动条无法触发滑动 需导入mui.js 并调用官方提示的方式去初始化
	+引入mui.js报错 
	#自己搜的解决方案
	+加入mui('body').on('tap','a',function(){document.location.href=this.href;});可用 仍报错
	+mui.scroll滚动事件报错 
	mui.init();//进行初始化，并把方法放在jquery中 安装并引入jquery 仍报错但不影响使用
	$(function(){
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	})
	#视频中的解决方案
	+去掉webpack中的严格模式 npm i babel-plugin-transform-remove-strict-mode 并在.babelrc 文件添加配置

	{
		"plugins": ["transform-remove-strict-mode"]
	}

	#刚进入界面没有滚动效果 只有刷新界面后才有
	+需要把mui.scroll方法放在mounted钩子函数中

	#报错 [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See <URL> 但不影响使用 解决方法  在style中加
		*{
			touch-action: pan-y;
		}
	#改完这些发现vue其他组建不能正常跳转 原因是mui-tab-item这个类名，和mui中的js文件有冲突，解决方法 更改类名，重写样式
#由于使用太麻烦改用elementui的导航栏

#点击图片跳转到图片详情页photoinfo.vue
+通过url参数 获取参数中的id 通过this.$route.query.id获取id，通过不同id进行信息的筛选
+图片查看器vue-preview https://www.cnblogs.com/mrszhou/p/7899887.html

