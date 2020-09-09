<template>
    <div class="homemine">
        <!-- 头部个人信息 -->
        <header>
            <!-- 头像 -->
            <div class="person">
                <van-image
                    round
                    width="51px"
                    height="51px"
                    :src="head"
                    v-if="token"
                />
                <van-image
                    round
                    width="51px"
                    height="51px"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                    v-else
                />
                <div class="username" @click="gotoUrl('/register')">
                    <p v-if="token">权志龙</p>
                    <p v-else class="not-log">点击登录</p>
                    <span v-if="token">新手</span>
                    <span v-else class="log-happy">登录更精彩</span>
                </div>
                <div class="my-home" @click="gotoUrl('/personalhomepage')">
                    个人主页
                    <img src="../../assets/MineImg/形状 8@2x.png" alt="">
                </div>
            </div>
            <!-- 关注粉丝栏 -->
            <nav>
                <li v-for="(item,index) in fans" :key="index">
                    <span>{{ item.num }}</span>
                    <span>{{ item.class }}</span>
                </li>
            </nav>
        </header>

        <!-- 订单栏 -->
        <van-cell title="我的订单" @click="gotoUrl('/myorder')">
            <template #right-icon>
                <img src="../../assets/MineImg/形状 7@2x.png" alt="">
            </template>
        </van-cell>
        <van-grid :border="false" icon-size="20px">
            <van-grid-item v-for="(item,index) in order" :key="index" :icon="item.OrderIcon" :text="item.text" @click="myorder(index)" />
        </van-grid>
        <!-- 优惠卷 -->
        <nav class="discount">
            <li v-for="(item,index) in discount" :key="index">
                <span class="dis-num">{{ item.num }}</span>
                <span>{{ item.discountclass }}</span>
            </li>
        </nav>
        <!-- 分期额度 -->
        <div class="paystage">
            <img src="../../assets/MineImg/组 22@2x.png" alt="">
            <p>查看我的额度</p>
            <span>（新用户3期免息）</span>
        </div>
        <!-- 福利 -->
        <div class="welfare-wrap">
            <h3>我的福利</h3>
            <div class="line"></div>
            <div class="welfare">
                <div class="left">
                    <img src="../../assets/MineImg/图标@2x(1).png" alt="">
                    <div>
                        <span>我的权益</span>
                        <span>尊享礼包+特权</span>
                    </div>
                </div>
                <div class="right"  @click="vip">
                    <img src="../../assets/MineImg/组 18 拷贝@2x.png" alt="">
                    <div>
                        <span>圈圈会员</span>
                        <span>达人专属</span>
                    </div>
                </div>
            </div>
            <div class="line"></div>
        </div>

        <!--列表信息单元格  -->
        <section v-for="(item,index) in megList" :key="index" @click="cellgo(item.path)" >
            <van-cell :title="item.content" >
                <template #right-icon>
                    <img src="../../assets/MineImg/形状 7@2x.png" alt="">
                </template>
            </van-cell>
        </section>
        
    </div>
</template>

<script>
import Head from "../../assets/MineImg/图层 1@2x.png"
import OrderIcon1 from "../../assets/MineImg/图标@2x(2).png"
import OrderIcon2 from "../../assets/MineImg/图标@2x(3).png"
import OrderIcon3 from "../../assets/MineImg/图标@2x(4).png"
import OrderIcon4 from "../../assets/MineImg/图标@2x(5).png"
export default {
    data(){
        return {
            head: Head,
            fans:[
                {
                    num:0,
                    class:'想看'
                },
                {
                    num:0,
                    class:'评论'
                },
                {
                    num:0,
                    class:'大牌'
                },
                {
                    num:10,
                    class:'关注'
                },
                {
                    num:7,
                    class:'粉丝'
                }
            ],
            order:[
                {
                    OrderIcon:OrderIcon1,
                    text:"待付款"
                },
                {
                    OrderIcon:OrderIcon2,
                    text:"代发货"
                },
                {
                    OrderIcon:OrderIcon3,
                    text:"待收货"
                },
                {
                    OrderIcon:OrderIcon4,
                    text:"待评价"
                },
            ],  
            discount:[
                {
                    num:'0',
                    discountclass:'优惠券'
                },
                {
                    num:'0',
                    discountclass:'礼品卡'
                },
                {
                    num:'0.00',
                    discountclass:'我的钱包'
                }
            ],
            megList:[
                {
                    content:'地址管理',
                    path:'/addressadministration'
                },
                {
                    content:'帮助与客服',
                    path:''
                },
                {
                    content:'协议隐私',
                    path:''
                },
                {
                    content:'卖家招募',
                    path:''
                },
                {
                    content:'设置',
                    path:'/set'
                },
            ],
            token:''
        }
    },
    mounted() {
        this.token = localStorage.getItem('token')
    },
    methods: {
        vip() {
            this.$router.push('/circleclub')
        },
        myorder(val) {
            this.$router.push({path:'/myorder', query: { order: val }})
            console.log(val)
        },
        cellgo(to) {
            this.$router.push(to);
        },
        gotoUrl(url) {
            this.$router.push(url)
        },
    },
    // activated() {
    //     console.log(1);
    // },
    // deactivated(){
    //     console.log(2);
    // },
    // beforeDestroy(){
    //     console.log(3);
    // },
    // destroyed(){
    //     console.log(4);
    // }
    // activated() {
    //     console.log(1);
    //     document.documentElement.scrollTop = sessionStorage.getItem('HomeMine')
    // },
    // deactivated() {
    //     console.log(2);
    //     sessionStorage.setItem('HomeMine', document.documentElement.scrollTop)
    // }
}
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Medium;
    }
    .homemine {
        width: 100%;
        display: flex;
        flex-direction:column;
        background: #F2F1F1;
        header {
            width: 100%;
            height: 139px;
            background:url(../../assets/MineImg/headerBg.png) 100% 100% no-repeat;
            color: #fff;
            display: flex;
            flex-direction: column;
            .person {
                height: 51px;
                margin-top: 18px;
                padding-left: 20px;
                position: relative;
                display: flex;
                align-items: center;
                margin-bottom: 34px;
            }
            .username {
                height: 51px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                margin-left: 9px;
                p {
                    font-size: 18px;
                    font-family: Bold;
                }
                span {
                    width:55px;
                    height: 16px;
                    border-radius: 8px;
                    border: 1px solid #EE95B1;
                    text-align: center;
                    line-height: 16px;
                    font-size: 12px;
                }
                .log-happy {
                    width: 70px;
                    border: none;
                     text-align: left;
                }
            }
            .my-home {
               width: 72px;
                height: 28px;
                position: absolute;
                right: 0;
                top: 11px;
                background: #CE4982;
                border-radius: 14px 0px  0px 14px;
                font-size: 11px;
                line-height: 28px;
                text-indent: 10px;
                img {
                    width: 6px;
                    height: 11px;
                    position: absolute;
                    top: 9px;
                    right: 3px;
                }
            }
            nav {
                height: 36px;
                display: flex;
                li {
                    list-style: none;
                    width: 20%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    span {
                        font-size: 15px;
                        line-height: 15px;
                        margin-bottom: 4px;
                        &:last-child {
                            font-size: 11px;
                            line-height: 11px;
                        }
                    }
                }
            }
        }
        // 订单
        .van-cell {
            height: 43px;
            display: flex;
            align-items: center;
            padding: 0 13px 0 19px;
           img {
               width: 8px;
               height: 13px;
           }
            .van-cell__title {
                font-size: 15px;
                font-family: Bold;
            }
            .van-cell__value, .van-icon-arrow {
                font-size: 13px;
            }
        }
        .van-grid {
            width: 100%;
            height: 60px;
             margin-bottom: 11px;
             .van-grid-item {
                 height: 100%;
                 color: #475153;
             }
             &::v-deep .van-grid-item__content {
                padding:12px 0 13px 0
             }
        }
        .grid-discount {
             margin-bottom: 9px;
             height: 62px;
        }
        // 优惠券
        .discount {
            width: 100%;
            background: white;
            height: 62px;
            margin-bottom: 9px;
            display: flex;
            justify-content: space-between;
            padding: 0 27px;
            li {
                list-style: none;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                margin: 15px 0 16px 0;
                span {
                    font-size: 11px;
                    color: #475153;
                }
                .dis-num {
                    font-size: 15px;
                    color: #E50054;
                }
            }
        }
        // 分期付款
        .paystage {
            width: 100%;
            height: 49px;
            background: #fff;
            margin-bottom: 9px; 
            padding-left: 19px;;
            display: flex;
            align-items: center;
             font-size: 13px;
            font-weight: 500;
            img {
                width: 19px;
            }
            p {
                margin: 0 12px;
               
            }
            span {
                color: #E50053;
            }
        }
        // 福利
        .welfare-wrap {
            // padding: 0 18px 9px;
            width: 100%;
            background: white;
            .line {
                width: 100%;
                height: 1px;
                background: #F7F7F7;
                &:last-child {
                    margin-bottom: 9px;
                }
            }
            h3 {
                height: 36px;
                font-size: 15px;
                font-family: Bold;
                line-height: 36px;
                padding: 0 18px;
            }
            .welfare {
                height: 72px;
                width: 100%;
                display: flex;
                padding: 0 18px;
                .left, .right {
                    width: 50%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    img {
                        width: 43px;
                        margin-right: 12px;
                    }
                    div {
                        display: flex;
                        flex-direction: column;
                    }
                    span {
                        font-size: 11px;
                        color: #909191;
                        &:first-child {
                            font-size: 13px;
                            font-family: Bold;
                            margin-bottom: 10px;
                            color: black;
                        }
                    }
                }
            }
        }
        // 列表信息选项
        section {
            width: 100%;
            border-top: 1px solid #F7F7F7;
            img {
                width: 8px;
                height: 12px;
            }
            .van-cell--clickable {
                padding: 0 18px;
            }
            .van-cell .van-cell__title {
                height: 39px;
                font-size: 14px;
                font-weight: 500;
                display: flex;
                align-items: center;
            }
        }
    }
</style>