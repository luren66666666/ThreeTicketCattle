<!--
 * @Author: your name
 * @Date: 2020-08-31 20:00:24
 * @LastEditTime: 2020-09-02 11:25:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \票牛\ThreeTicketCattle\src\components\home\HomeDiscover.vue
-->
<template>
    <div class="discover-wrap">
        <!-- 热门关注 -->
        <div>
            <van-nav-bar fixed placeholder border>
                <template #left>
                    <van-icon name="search" size="18" />
                    <div class="remen">
                        <div v-for="(value,index) in tab" :key="index" :class="{active:isIndex==index}" @click="onTab(index)">
                            {{ value.title }}
                        </div>
                    </div>
                </template>
            </van-nav-bar>
        </div>
        <!-- 图片 -->
        <div class="img-wrap">
            <img :src="img" alt="">
        </div>
        <!-- 免费抽奖,拍客现场,每日奖励 -->
        <div class="choujiang-wrap">
            <div>
                <span>免费抽奖</span>
                <span>现场体验官</span>
                <span><img src="" alt=""></span>
            </div>
            <div>
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
                <p>不死的戏剧 与无边的戏台</p>
            </div>
            <div>
                <img :src="img2" alt="">
                <p class="line-ellipsis">阿朵专访：曾经消失5年，再见阿朵专访：曾经消失5年，再见</p>
            </div>
        </div>
        <!-- 全部 -->
        <div>
            <van-tabs v-model="active" sticky>
                <van-tab v-for="(value,index) in tabList" :key="index" :title="value.title" :to="value.to"></van-tab>
            </van-tabs>
            <div class="quanbu-wrap">
                <img :src="img" alt="" v-for="value in 10" :key="value" style="width:97px;height:59px">
            </div>
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
                    to:''
                },
                {
                    title:'音乐',
                    to:''
                },
                {
                    title:'戏剧',
                    to:''
                },
                {
                    title:'展览',
                    to:''
                },
                {
                    title:'亲子',
                    to:''
                },
                {
                    title:'幕后花絮',
                    to:''
                }
            ],
            isIndex: 0
        }
    },
    methods: {
        onTab(i) {
            this.isIndex = i;
        },
        onClickLeft() {
            Toast('按钮');
        },
        toDailyReward() {
            this.$router.push('/dailyreward');
        }
  },
}
</script>
<style lang="scss">
    .discover-wrap {
        @import '@/assets/sass/reset.scss';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ddd;
        .van-nav-bar__placeholder{
            background: #fff;
            .van-nav-bar__left{
                width: 220px;
                display: flex;
                justify-content: space-between;
                .remen{
                    width: 93px;
                    display: flex;
                    justify-content: space-between;
                    .active{
                        color: #000;
                        font-weight: bolder;
                    }
                }
            }
        }
       .van-nav-bar{
            // margin-top: 44px;
            display: flex;
            justify-content:space-between;
        .van-icon{
            color: #000;
        }
        .van-tabs__wrap{
            margin-left: 108px;
            width: 95px;
        }
        .van-tab--active{
            font-weight: 700;
        }
        }
        .img-wrap{
            width: 375px;
            height: 101px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .choujiang-wrap{
            // width: 375px;
            // height: 100px;
            background: #fff;
            padding: 20px 14px 10px;
            display: flex;
            justify-content: space-between;
            div{
                width: 107px;
                height: 57px;
                display: flex;
                flex-direction: column;
                box-shadow: -1px 3px 3px rgba(0,0,0,.1);
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
        .xiaoshi-wrap{
            background: #fff;
            padding: 10px 13px 10px;
            display: flex;
            justify-content: space-between;
            div{
                width: 173px;
                height: 105px;
                box-shadow: -1px 3px 3px rgba(0,0,0,.1);
                img{
                    width: 100%;
                    height: 75px;
                }
                p{
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 24px;
                }
            }
        }
        .quanbu-wrap{
            height: 80px;
            padding: 10px 0 0 14px;
            display: flex;
            flex-wrap: nowrap;
            overflow: scroll;
            background: #fff;
            img{
                margin-right: 4px;
            }
        }
        .user-wrap{
            padding-left: 14px;
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
        .zan-wrap{
            background: #fff;
            padding: 0 13px 10px;
            display: flex;
            justify-content: space-between;
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
                    height: 20px;
                    span{
                        font-size: 10px;
                    }
                }
            }
        }
    }
</style>