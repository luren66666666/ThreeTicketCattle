<template>
    <div class="daily-reward">
        <!-- 头部 "每日奖励" -->
        <van-nav-bar
        title="每日奖励"
        left-arrow
        @click-left="onClickLeft"
        class="daily-reward-van-nav-bar__title"
        />
        <!-- "做任务领奖励" -->
        <div class="daily-reward_task">
            <div class="daily-reward_task_word">
                <i>做任务领奖励</i>
                <span>活动规则</span>
            </div>

            <div class="progress_bar">
                <p>0</p>
                <div></div>
            </div>
            <div class="progress_bar_bottom">
                <span>我30天内的能量</span>
                <p>能量值记录 &gt;</p>
            </div>
        </div>
        <!-- 新手奖励 -->
        <div class="noodReward_warp">
            <div class="noodReward">
                <van-circle v-model="currentRate" :rate="0" :speed="100" :text="text" style="width:60px;height:44px" layer-color="#e2edf9" />
                <div>
                    <h4>新手奖励</h4>
                    <span>做任务立即领取</span><b>50元优惠券</b>
                </div>
                <p>领奖励</p>
            </div>
            <ul class="noodReward_ul">
                <li v-for="(item,index) in noodList" :key="index">
                    <div>
                        <b>{{ item.title }}</b>
                        <span>{{ item.info }}</span>
                    </div>
                    <p>去完成</p>
                </li>

                
            </ul>
        </div>
        <!-- 每日任务 -->
        <div class="dailymission_warp">
            <h3></h3>
            
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return{
            noodList:[
                {
                    title:'完善个人资料',
                    info:'头像、昵称、签名、性别、生日信息',
                    affair:''
                },
                {
                    title:'发布圈圈',
                    info:'分享你的精彩现场',
                    affair:''
                },
                {
                    title:'关注好友',
                    info:'如果你喜欢TA就关注TA',
                    affair:''
                },
                {
                    title:'点赞',
                    info:'为你喜欢的内容点一个赞',
                    affair:''
                }
            ],
            currentRate: 0,
        }
    },
    methods: {
         onClickLeft() {
            this.$router.go(-1)
        },
    },
    computed: {
        text() {
        return this.currentRate.toFixed(0) + '%';
        },
    },
}
</script>


<style lang="scss" >
@import '@/assets/style/dailyReward.scss';
    .daily-reward{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        .daily-reward-van-nav-bar__title{
            width: 100%;
            margin-top: 44px;
            font-size: 16px;

        }
        .daily-reward_task{
            width: 100%;
            height: 172px;
            background: url('../../assets/dailyReward-img/01.png') no-repeat;
            background-size: 100%;
            overflow: hidden;
            .daily-reward_task_word{
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                i{
                    font-size: 24px;
                    color: #ffffff;
                    margin-left: 12px;
                }
                span{
                    width: 60px;
                    height: 19px;                   
                    background: rgba($color: #000000, $alpha: .2);
                    border-radius: 9px 0px 0px 9px;
                    font-size: 8px;
                    text-align: center;
                    line-height: 19px;
                    color: #ffffff;
                    letter-spacing: 2px;
                }
            }
            .progress_bar{
            width: 317px;
            height: 3px;
            background: rgba($color: #fff, $alpha: .2);
            margin-top: 62px;
            margin-left: 50%;
            transform: translateX(-50%);
            position: relative;
                p{
                    width: 44px;
                    height: 20px;
                    border-radius: 9px 9px 9px 9px;
                    background: #fff;
                    position: absolute;
                    left: -21px;
                    top: -52px;
                    font-size: 14px;
                    text-align: center;
                    line-height: 20px;
                    &:after {
                        content: '';
                        display: block;
                        width: 0px;
                        height: 0px;
                        border: 10px solid;
                        border-color: #fff transparent transparent transparent;
                        position: absolute;
                        bottom: -19px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
                div{
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background-image: radial-gradient(#fff 0%,#fff 40%,rgba(255,255,255,.2) 40%,rgba(255,255,255,.2) 100%);
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    z-index: 2;
                }
            }
            .progress_bar_bottom{
            width: 317px;
            margin-left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 8px;
            color: #fff;
            letter-spacing: 1px;
            }
        }
        .noodReward_warp{
            width: 350px;
            border-radius: 5px;
            background: #fff;
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            position: absolute;
            top: 243px;
            left: 50%;
            transform: translateX(-50%);
            .noodReward{
                width: 331px;
                height: 62px;
                margin-top: 10px;
                border-bottom: 1px solid #eeeeee;
                display: flex;
                align-items: center;
                justify-content: space-between;
                div{
                    h4{
                    font-size: 16px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    }
                    span{
                    font-size: 10px;
                    color: #777777;
                    }
                    b{
                    font-size: 10px;
                    color: rgb(255, 192, 241);
                    }
                }
                p{
                    width: 60px;
                    height: 21px;
                    border-radius: 10px;
                    color: pink;
                    background: rgba($color: pink, $alpha: .2);
                    font-size: 10px;
                    text-align: center;
                    line-height: 21px;
                }
                
            }
            .noodReward_ul{
                li{
                    width: 331px;
                    height: 54px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid #eeeeee;
                    div{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: space-around;
                        b{
                        font-size: 14px;
                        }
                        span{
                            font-size: 10px;
                            color: #777777;
                        }
                    }
                    p{
                        width: 60px;
                        height: 21px;
                        border-radius: 10px;
                        color: #fff;
                        background: #4151a1;
                        font-size: 10px;
                        text-align: center;
                        line-height: 21px;
                    }
                }
            }
        }
        .dailymission_warp{
            width: 350px;
            height: 272px;
            border-radius: 5px;
            background: #fff;
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            position: absolute;
            top: 575px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
