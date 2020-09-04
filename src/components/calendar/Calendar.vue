<template>
    <div class="calendar-warp">
        <!-- 头部 -->
        <van-nav-bar
        title="9月演出"
        left-arrow
        @click-left="onClickLeft"
        class="daily-reward-van-nav-bar__title calendar-van-nav-bar__title"
        right-text="今天"
        />
        <!-- 日历区 -->
        <van-calendar
        :show-title="false"
        :show-subtitle="false"
        :show-mark="false"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '212px' }"
        />
        <!-- 演出 -->
        <van-tabs v-model="active" animated title-active-color="#E62F5D" 
        title-inactive-color="#000" sticky  swipeable >
            <van-tab v-for="(item,index) in classification" :title="item" :key="index" 
        class="calendar-van-tab" 
        >
                <ul class="calendarUl">
                    <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                    >
                    <li v-for="index in list" :key="index">
                        <div class="imgbox">
                            <img :src="img08" alt="">
                        </div>
                        <div class="wordContent">
                            <p class="word_top">
                                <span class="title">[杭州]最忆是杭州</span>
                                <span class="site">2019.07.13-10.32  杭州西湖</span>
                            </p>
                            <p class="word_bottom">
                                <span class="pirce">
                                <b>310</b>元起
                                </span>
                                <span class="E-ticket">电子票</span>
                            </p>
                            
                        </div>
                    </li>
                    </van-list>
                </ul>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import img08 from '../../assets/dailyReward-img/08.png'
export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        scroll1() {
            if(this.scrollTop > 50) {
                this.distance = 50
            }
            if(this.scrollTop <=50) {
                this.distance = -50
            }
        },
        onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                this.list.push(this.list.length + 1);
                }

                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 30) {
                this.finished = true;
                }
            }, 1000);
        },
    },
    
    data() {
        return {
            classification:['全部','演唱会','旅游玩乐','话剧歌剧','休闲展览','体育赛事','音乐会','儿童亲子','戏曲综艺','舞蹈芭蕾','潮生活'],
            active:0,
            img08:img08,
            distance:0,
            list: [],
            loading: false,
            finished: false,
        }
        
    },
    
}
</script>
<style lang="scss" scoped>
    @import '@/assets/style/dailyReward.scss';
    .calendar-warp{
        position: fixed;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        display: flex;
        flex-direction: column;
        align-content: center;
        overflow: auto;
        .calendarUl{
            display: flex;
            flex-direction: column;
            align-items: center;
            
            li{
                width: 350px;
                height: 150px;
                border-bottom: 1px solid #eeeeee;
                display: flex;
                align-items: center;
                font-size: 10px;
                .imgbox{
                    width: 69px;
                    height: 92px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .wordContent{
                    height: 92px;
                    margin-left: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    .word_top{
                        display: flex;
                        flex-direction: column;
                        .title{
                            font-size: 14px;
                            font-weight: 700;
                        }
                        .site{
                            color: #9B9B9C;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                    .word_bottom{
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .pirce{
                            color: #9B9B9C;
                            b{
                                font-size: 16px;
                                color: #E5266B;
                            }

                        }
                        .E-ticket{
                            color: #9B9B9C;
                        }
                    }
                }
            }
        }
    }

</style>