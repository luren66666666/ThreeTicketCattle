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
    <div id="noodReward_father">
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
                    <p @click="skip(index)">去完成</p>
                </li>

                
            </ul>
        </div>
    </div>
        <!-- 每日任务 -->
        <div class="dailymission_warp">
            <h4>每日任务</h4>
            <ul class="dailmission_ul">
                <li v-for="(item,index) in dailmissionList" :key="index">
                    <main>
                    <div class="icon_img">
                        <img :src="item.imgurl" alt="">
                    </div>
                    <div>
                        <b>{{ item.title }}</b>
                        <span>{{ item.info }}</span>
                    </div>
                    </main>
                    <p @click="skip2(index)">去完成</p>
                </li>
            </ul>
        </div>


        <!-- 能量兑换 -->
        <div class="exchange-warp">
            <h4>能量兑换</h4>
            <ol class="exchange-ol">
                <li>
                    <div class="li_top">
                        <p><strong>￥</strong><b>10</b></p>
                        <span><i>优惠券</i><em>满200可用</em></span>
                    </div>
                    <div class="li_bottom">50能量兑换</div>
                </li>
                <li>
                    <div class="li_top">
                        <p><strong>￥</strong><b>30</b></p>
                        <span><i>优惠券</i><em>满600可用</em></span>
                    </div>
                    <div class="li_bottom">100能量兑换</div>
                </li>
                <li>
                    <div class="li_top">
                        <p><strong>￥</strong><b>50</b></p>
                        <span><i>优惠券</i><em>满1000可用</em></span>
                    </div>
                    <div class="li_bottom">50能量兑换</div>
                </li>
                <li>
                    <div class="li_top">
                        <p><strong>￥</strong><b>100</b></p>
                        <span><i>优惠券</i><em>满2000可用</em></span>
                    </div>
                    <div class="li_bottom">100能量兑换</div>
                </li>
            </ol>
        </div>

        <!-- 底部 -->

        <div class="footerimg">
            <img :src="img06" alt="">
        </div>
        <van-popup
         v-model="show"
         :style="{ height: '100%' }"
         position="bottom"
         closeable
        close-icon-position="top-left"
        >
        <div class="issueHeader"><span>发表圈圈</span><button>发布</button></div>
        <textarea  placeholder="写几句感想吧~" style="font-size:14px;width:100%;height:150px;border:none"></textarea>
        </van-popup>
    </div>
</template>


<script>
import img02 from '../../assets/dailyReward-img/02.png'
import img03 from '../../assets/dailyReward-img/03.png'
import img04 from '../../assets/dailyReward-img/04.png'
import img05 from '../../assets/dailyReward-img/05.png'
import img06 from '../../assets/dailyReward-img/06.png'
export default {
    
    data() {
        return{
            noodList:[
                {
                    title:'完善个人资料',
                    info:'头像、昵称、签名、性别、生日信息',
                },
                {
                    title:'发布圈圈',
                    info:'分享你的精彩现场',
                },
                {
                    title:'关注好友',
                    info:'如果你喜欢TA就关注TA',
                },
                {
                    title:'点赞',
                    info:'为你喜欢的内容点一个赞',
                }
            ],
            dailmissionList:[
                {
                    title:'每日签到',
                    info:'每日签到+2能量值',
                    imgurl:img02,
                    affair:''
                },
                {
                    title:'每日参与',
                    info:'参与每日话题+5能量值(灌水无效)',
                    imgurl:img03,
                    affair:''
                },
                {
                    title:'每日回复',
                    info:'回复任意- -条圈圈内容+3能量',
                    imgurl:img04,
                    affair:''
                },
                {
                    title:'每日分享',
                    info:'分享任意一条票圈内容即可。',
                    imgurl:img05,
                    affair:''
                }
            ],
            currentRate: 0,
            img06:img06,
            show: false,

        }
    },
    methods: {
         onClickLeft() {
            this.$router.go(-1)
        },
        skip(i) {
            if(i === 0) {
                console.log(1);
            }else 
            if(i === 1) {
                this.show = true
            }else
            if(i === 2 || 3) {
            this.$router.push('/home/discover')
            }
        },
         skip2(i) {
            if(i === 0) {
                console.log(1);
            }else 
            if(i === 1) {
                console.log(2);
            }else
            if(i === 2 || 3) {
            this.$router.push('/home/discover')
            }
        }
    },
    computed: {
        text() {
        return this.currentRate.toFixed(0) + '%';
        },
    },
}
</script>


<style lang="scss" >
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
        #noodReward_father{
            width:350px;
            transform: translateY(-6px);
            .noodReward_warp{
            width: 350px;
            border-radius: 5px;
            background: #fff;
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            // position: absolute;
            
            // top: -6px;
            // left: 50%;
            // transform: translateX(-50%);
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
        }
        
        .dailymission_warp{
            width: 350px;
            border-radius: 5px;
            background: #fff;
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 33px;
            h4{
                width: 331px;
                height: 46px;
                margin: 0;
                font-size: 16px;
                text-align: start;
                line-height: 46px;
            }
            .dailmission_ul{
                li{
                    width: 331px;
                    height: 54px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-bottom: 1px solid #eeeeee;
                    main{
                        display: flex;
                        justify-content: space-between;
                        .icon_img{
                        width: 16px;
                        height: 16px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        }
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
        .exchange-warp{
            width: 350px;
            height: 259px;
            border-radius: 5px;
            background: #fff;
            box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 33px;
            h4{
                width: 331px;
                height: 46px;
                margin: 0;
                font-size: 16px;
                text-align: start;
                line-height: 46px;
            }
            .exchange-ol{
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;
                
                li{
                    width: 162px;
                    height: 83px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    margin: 5px;
                    background: url(../../assets/dailyReward-img/07.png) no-repeat;
                    background-size: 100%;
                    .li_top{
                        height: 25px;
                        display: flex;
                        align-items: center;
                        p{
                            strong{
                                font-size: 14px;
                            } 
                        }
                        span{
                            display: flex;
                            flex-direction: column;
                            i{
                                font-size: 12px;
                                
                            }
                            em{
                                font-size: 8px;
                                color: #808485;
                            }
                        }
                    }
                    .li_bottom{
                        width: 93px;
                        height: 20px;                       
                        background: #FDEFF3;
                        border-radius: 10px;
                        font-size: 10px;
                        color: #F095AF;
                        text-align: center;
                        line-height: 20px;
                    }
                }
            }
        }
        .footerimg{
            width: 348px;
            height: 74px;
            margin-top: 22px;
            margin-bottom: 44px;
            img{
                width: 100%;
                height: 100%;
            }

        }
        .issueHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            margin-top: 10px;
            span{
                margin-left: 50%;
                transform: translateX(-50%);
                font-weight: 700;
            }
            button{
                width: 80px;
                height: 30px;
                margin-right: 20px;
                font-size: 12px;
                color: #fff;
                background: red;
                border: none;
                outline: none;
            }
            
        }
    }
</style>
