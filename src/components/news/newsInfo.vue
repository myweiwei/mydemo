<template>
    <div style='padding:0 4px;'>
        <!-- 标题 -->
        <h4 class='title'>我是标题，id为{{id}}</h4>
        <div class='article-info'><div>发布时间：2018-11-27</div><div>点击：1次</div></div>
        <hr>
        <!-- 内容 -->
        <div class='content'>
              从狗狗的视觉上来说，狗狗应该被算到“色盲”的行列，但是对于狗狗来说，它们能看到的东西，感受到的世界要比我们人类想象中还要多，因为它们有相当厉害的嗅觉系统。距离来说，狗狗拥有更加“立体”的嗅觉，这意味着它们的两个鼻孔是可以独立感知气味的种类与来源。
              此外，它们还可以让气流从某个鼻孔进来，又从另一个鼻孔流出，中途还将气味信息通过上亿的嗅觉感知单元进行分类。<br>
              随后，这些感知单元会向大脑的嗅球(olfactory bulb)部分发送巨量的信息，而狗狗的这部分显然比人类的大很多。狗狗的嗅觉系统甚至发达到了能够“看见”(闻到)普通人看不出到的物体，甚至是人类或其它动物排出的激素。
              如此一来，狗狗就能够通过这类信息来判定周边是否有潜在的配偶、它们的人类朋友是否怀孕或生病、以及一个特定的生物是友好还是充满了敌意。
              从狗狗的视觉上来说，狗狗应该被算到“色盲”的行列，但是对于狗狗来说，它们能看到的东西，感受到的世界要比我们人类想象中还要多，因为它们有相当厉害的嗅觉系统。距离来说，狗狗拥有更加“立体”的嗅觉，这意味着它们的两个鼻孔是可以独立感知气味的种类与来源。
              此外，它们还可以让气流从某个鼻孔进来，又从另一个鼻孔流出，中途还将气味信息通过上亿的嗅觉感知单元进行分类。<br>随后，这些感知单元会向大脑的嗅球(olfactory bulb)部分发送巨量的信息，而狗狗的这部分显然比人类的大很多。
              狗狗的嗅觉系统甚至发达到了能够“看见”(闻到)普通人看不出到的物体，甚至是人类或其它动物排出的激素。
              如此一来，狗狗就能够通过这类信息来判定周边是否有潜在的配偶、它们的人类朋友是否怀孕或生病、以及一个特定的生物是友好还是充满了敌意。
        </div>
        <!-- 评论 -->
        <comments></comments>
    </div>
</template>
<script>
    // 导入评论区子组件
    import comments from '../subcomponents/comment.vue'
    export default {
        data(){
            return {
                id:this.$route.query.id
                //获取地址栏写死的id值 ，为了和每条新闻对应
            }
        },
        mounted(){
            console.log(this.$route.query.id)
        },
        components:{
            comments
        }
    }
</script>
<style scoped>
    .title{
        color:red;
        text-align: center;
        padding:5px 0;
        font-size:16px;
    }
    .article-info{
        font-size: 13px;
        color:#26a2ff;
        display: flex;
        justify-content: space-between;
    }
    hr{
        padding: 0;
        margin:0;
        background: #acacb1;
    }
    .content{
        font-size: 12px;
        color:#8f8f94;
        text-indent: 2em;
    }
    
</style>