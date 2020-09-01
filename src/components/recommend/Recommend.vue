<template>
    <div class="recommend-recommend">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="艳阳高照 组团出门浪"  left-arrow :border="false">
            <template #right>
                <van-icon name="cluster-o" size="18" />
            </template>
        </van-nav-bar>

        <!-- 列表选项 -->
        <div class="ulboxes">
            <ul>
                <li v-for="(value,index) in listArr" :key="index">{{value}}</li>
            </ul>
        </div>
        
        <!-- 版型 -->
        <div class="boxesmodel">
            <!-- 释放压力 -->
            <div class="imgboxesmodel">
                <img src="../../assets/images/票牛-推荐/tu1@3x.png" alt="">
                <span class="span1">释放压力</span>
                <span class="span2">热展一网打尽</span>
            </div>

            <!-- 两个列表 -->
            <div class="boxesli" v-for="(value,index) in 2" :key="index">

            </div>
        </div>

        
    </div>
</template>
<script>
export default {
    data(){
        return {
            listArr:['爆款推荐','春末初夏','释放压力','爱宠同游']
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/style/reset.scss';
.recommend-recommend{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: #efa383;
    .van-nav-bar{
        width: 100%;
        background-color: #efa383;
        height: 36px;
        .van-icon{
            color: black;
        }
        .van-nav-bar__title{
            font-size: 16px;
        }
    }
    .ulboxes{
        width: 100%;
        height: 44px;
        background-color: #b74521;
        ul{
            margin-left: 23px;
            width: 329px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                font-size: 16px;
            }
        }
    }
    .boxesmodel{
        width: 344px;
        // background-color: white;
        height: 500px;
        .imgboxesmodel{
            margin-top: 42px;
            width: 100%;
            height: 70px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            span{
                position: absolute;
            }
            .span1{
                left: 13px;
                top: 16px;
                font-size: 21px;
            }
            .span2{
                left: 15px;
                top: 43px;
                font-size: 12px;
                font-family: Medium;
            }
        }
        .boxesli{
        width: 344px;
        height: 211px;
        margin-top: 8px;
        background-color: white;
        }
    }
    
}
</style>