<template>
    <div class='comments'>
        <div class="comments-title">发表评论</div>
        <hr style='margin:0'>
        <textarea maxlength="120" v-model='comm' placeholder="请发表评论（最多不超过120字）" style='font-size:12px;margin:0;border:1px solid #fff;height:85px'></textarea>
        <mt-button type="primary" size='large' style='font-size:15px;' @click='add()'>发表评论</mt-button>
        <div class="comments-area" v-for="(item,index) in commentlist">
           <p class='top'>第{{index+1}}楼 用户：匿名用户 发表时间：{{item.time | formateDate('YMDHMS')}}</p>
           <p class='content'>{{item.comm}}</p>
        </div>
        <mt-button type="danger" size='large' plain style='font-size:15px;' @click='more()'>加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import $ from 'jquery'
    export default{
        data(){
            return {
                commentlist:[],
                comm:'',
                time:'',

            }
        },
        methods:{
            add:function(){
                var me=this;
                var arg={};
                arg.comm=me.comm;
                arg.time=new Date();
                if(arg.comm==''){
                    Toast('请填写评论内容');
                    return 
                }
                me.commentlist.push(arg);
                me.comm='';
            },
            more:function(){
                Toast('没啥内容，别看了');
            }
            
        }
    }
     
</script>
<style scoped>
    .comments{
        padding-top:5px;
    }
    .comments-title{
        color:#000;
        font-size:15px;
        font-weight: bold;
    }
    .top{
        width:100%;
        background: #dbdbdb;
        color:#404040;
        font-size: 12px;
        height:35px;
        line-height: 35px;
    }
    .content{
        color:#323232;
        text-indent: .5em;
    }
</style>