<!--
 * @Author: your name
 * @Date: 2020-08-31 20:00:24
 * @LastEditTime: 2020-09-03 19:18:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \票牛\ThreeTicketCattle\src\components\home\HomeDiscover.vue
-->
<template>
    <div id="discover-wrap">
        <div class="container">
            <!-- 热门关注 -->
            <div class="discover">
                <van-icon name="search" size="18" />
                <div class="remen">
                    <div v-for="(value,index) in tab" :key="index" :class="{active:isIndex==index}" @click="onTab(index)">
                        {{ value.title }}
                    </div>
                </div>
            </div>
            <!-- 图片 -->
            <div class="img-wrap">
                <img :src="img" alt="">
            </div>
            <!-- 免费抽奖,拍客现场,每日奖励 -->
            <div class="choujiang-wrap">
                <div @click="toFreePrizeDraw">
                    <span>免费抽奖</span>
                    <span>现场体验官</span>
                    <span><img src="" alt=""></span>
                </div>
                <div >
                    <span>拍客现场</span>
                    <span>看拍客攻略</span>
                    <span><img src="" alt=""></span>
                </div>
                <div @click="toDailyReward">
                    <span>每日奖励</span>
                    <span>100元未领取</span>
                    <span><img src="" alt=""></span>
                </div>
            </div>
            <!-- 小十播报，独家探班 -->
            <div class="xiaoshi-wrap">
                <div>
                    <img :src="img1" alt="">
                    <p class="line-ellipsis">不死的戏剧 与无边的戏台</p>
                </div>
                <div>
                    <img :src="img2" alt="">
                    <p class="line-ellipsis">阿朵专访：曾经消失5年，再见阿朵专访：曾经消失5年，再见</p>
                </div>
            </div>
            <!-- 全部 -->
            <div class="quanbu-wrap">
                <van-tabs v-model="active" sticky offset-top=46>
                    <van-tab v-for="(value,index) in tabList" :key="index" :title="value.title">
                        <div v-show="index==0">
                            <!-- 图片滑动 -->
                            <div class="huadong-wrap">
                                <div class="huadong">
                                    <img :src="img" alt="" v-for="value in 10" :key="value">
                                </div>
                            </div>
                            <div v-for="(value,index) in 10" :key="index" style="margin-bottom:9px">
                                <!-- 用户发表 -->
                                <div class="user-wrap">
                                    <div class="user">
                                        <img :src="img" alt="">
                                        <div>
                                            <p class="p1">努力努力再努力-vtG6s</p>
                                            <p class="p2">来自电竞：英雄联盟是0总决赛上海赛</p>
                                        </div> 
                                    </div>
                                    <p class="p3">十分期待哦！</p>
                                </div>
                                <!-- 赞回复评论 -->
                                <div class="zan-wrap">
                                    <p>2.3K 阅读</p>
                                    <div class="zan">
                                        <div>
                                            <van-icon name="good-job-o" />
                                            <span>赞</span>
                                        </div>
                                        <div>
                                            <van-icon name="other-pay" />
                                            <span>回复</span>
                                        </div>
                                        <div>
                                            <van-icon name="fire-o" />
                                            <span>分享</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-show="index==1">音乐</div>
                        <div v-show="index==2">戏剧</div>
                        <div v-show="index==3">展览</div>
                        <div v-show="index==4">亲子</div>
                        <div v-show="index==5">幕后花絮</div>
                    </van-tab>
                </van-tabs> 
            </div>
        </div>
    </div>
    
</template>
<script>
import img from '../../assets/img/组 17.png'
import img1 from '../../assets/img/组 23.png'
import img2 from '../../assets/img/组 24.png'
export default {
    data() {
        return {
            tab:[
                {
                    title:'热门',
                    to:'/home/discover'
                },
                {
                    title:'关注',
                    to:'/login'
                }
            ],
            active: 0,
            img: img,
            img1: img1,
            img2: img2,
            tabList:[
                {
                    title:'全部',
                },
                {
                    title:'音乐',
                },
                {
                    title:'戏剧',
                },
                {
                    title:'展览',
                },
                {
                    title:'亲子',
                },
                {
                    title:'幕后花絮',
                }
            ],
            isIndex: 0
        }
    },
    methods: {
        onTab(i) {
            this.isIndex = i;
        },
        toDailyReward() {
            this.$router.push('/dailyreward');
        },
        toFreePrizeDraw() {
            this.$router.push('/freeprizedraw');
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/sass/reset.scss';
// 全局
#discover-wrap {
    background: #eee;
    // 热门关注
    .discover{
        width: 351px;
        height: 46px;
        line-height: 46px;
        padding: 0 12px;
        background: #fff;
        position: sticky;
        top: 0;
        z-index: 10;
        .remen{
            width: 93px;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
        }
        .active{
            color: #000;
            font-weight: bolder;
            font-size: 15px;
        }
    }
    // 图片
    .img-wrap{
        width: 100%;
        height: 101px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    // 免费抽奖,拍客现场,每日奖励
    .choujiang-wrap{
        background: #fff;
        width: 351px;
        padding: 20px 12px 10px;
        display: flex;
        justify-content: space-between;
        div{
            width: 106px;
            height: 57px;
            display: flex;
            flex-direction: column;
            box-shadow: 1px 1px 3px 1px rgba(0,0,0,.1);
            border-radius: 2px;
            padding: 9px 0 0 7px;
            span{
                &:nth-of-type(1){
                    font-size: 15px;
                    font-weight: bold;
                    color: #000000;
                    line-height: 30px;
                }
                &:nth-of-type(2){
                    font-size: 12px;
                    color: #aaa;
                }
            }
        }
    }
    // 小十播报，独家探班
    .xiaoshi-wrap{
        width: 351px;
        background: #fff;
        padding: 5px 12px 10px;
        display: flex;
        justify-content: space-between;
        div{
            width: 173px;
            height: 105px;
            box-shadow: 1px 1px 3px 1px rgba(0,0,0,.1);
            img{
                width: 100%;
                height: 75px;
            }
            p{
                font-size: 12px;
                font-weight: bold;
                line-height: 30px;
            }
        }
    }
    // 全部
    .quanbu-wrap{
        width: 100%;
        // 图片滑动
        .huadong-wrap{
            width: 100%;
            padding: 10px 0;
            background: #fff;
                .huadong{
                width: 363px;
                transform: translateX(12px);
                display: flex;
                flex-wrap: nowrap;
                overflow: scroll;
                img{
                    width: 90px;
                    height: 51px;
                    margin-right: 4px;
                }
            }
        }
        // 用户发表
        .user-wrap{
            padding: 14px;
            height: 100px;
            background: #fff;
            .user{
                display: flex;
                justify-content: start;
                align-items: center;
                margin-bottom: 15px;
            }
            img{
                width: 32px;
                height: 32px;
                margin-right: 10px;
            }
            p{
                margin: 0;
            }
            .p1{
                font-size: 13px;
                font-weight: bold;
                color: #1F2122;
                line-height: 15px;
            }
            .p2{
                font-size: 11px;
                font-weight: 500;
                color: #999999;
            }
            .p3{
                font-size: 15px;
                font-weight: 500;
                color: #212527;
            }
        }
        // 赞回复评论
        .zan-wrap{
            background: #fff;
            padding: 0 12px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                font-size: 11px;
            }
            .zan{
                width: 186px;
                height: 20px;
                display: flex;
                justify-content: space-between;
                div{
                    font-size: 15px;
                    // width: 40px;
                    height: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span{
                        font-size: 10px;
                        margin-left: 5px;
                    }
                }
            }
        }
    }
}
</style>
