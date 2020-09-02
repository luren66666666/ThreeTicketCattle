<!--
 * @Author: your name
 * @Date: 2020-08-31 20:00:24
 * @LastEditTime: 2020-09-01 19:53:21
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
            <div >
                <span>拍客现场</span>
                <span>看拍客攻略</span>
                <span><img src="" alt=""></span>
            </div>
            <div @click="toDaily">
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
                <p>阿朵专访：曾经消失5年，再见...</p>
            </div>
        </div>
        <!-- 全部 -->
        <div>
            <van-tabs v-model="active" sticky>
                <van-tab v-for="(value,index) in tabList" :key="index" :title="value.title" :to="value.to"></van-tab>
            </van-tabs>
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
        toDaily() {
            this.$router.push('/dailyreward')
        }
  },
}
</script>
<style lang="scss">
    .discover-wrap {
        position: fixed;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 44px;
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
            margin-top: 44px;
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
                    margin: 0;
                    font-size: 12px;
                    font-weight: bold;
                    line-height: 12px;
                }
            }
        }
    }
</style>