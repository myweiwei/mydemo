<template>
    <div>
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<router-link to="/home/newsInfo?id=1">
					<img class="mui-media-object mui-pull-left" src="../../images/happiness.jpg">
					<div class="mui-media-body">
						<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        <div class='fb-time'>
                            <div>发布时间：2018.11.26 17:20</div>
                            <div>点击:1次</div>
                        </div>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link to="/home/newsInfo?id=2">
					<img class="mui-media-object mui-pull-left" src="../../images/house.jpg">
					<div class="mui-media-body">
						<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                        <div class='fb-time'><div>发布时间：2018.11.26 17:20</div><div>点击:1次</div></div>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link to="/home/newsInfo?id=3">
					<img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
					<div class="mui-media-body">
						<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                        <div class='fb-time'><div>发布时间：2018.11.26 17:20</div><div>点击:1次</div></div>
					</div>
				</router-link>
			</li>
            <li class="mui-table-view-cell mui-media">
				<router-link to="/home/newsInfo?id=4">
				<!-- 跳转到该条新闻的详情，没有接口所以写死id -->
					<img class="mui-media-object mui-pull-left" src="../../images/happiness.jpg">
					<div class="mui-media-body">
						<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                        <div class='fb-time'><div>发布时间：2018.11.26 17:20</div><div>点击:1次</div></div>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link to="/home/newsInfo?id=5">
					<img class="mui-media-object mui-pull-left" src="../../images/house.jpg">
					<div class="mui-media-body">
						<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                        <div class='fb-time'><div>发布时间：2018.11.26 17:20</div><div>点击:1次</div></div>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link to="/home/newsInfo?id=6">
					<img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">
					<div class="mui-media-body">
						<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                        <div class='fb-time'><div>发布时间：2018.11.26 17:20</div><div>点击:1次</div></div>
				    </div>
				</router-link>
			</li>
		</ul>
    </div>
</template>
<style scoped>
    .fb-time{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color:#26a2ff;
    }
</style>