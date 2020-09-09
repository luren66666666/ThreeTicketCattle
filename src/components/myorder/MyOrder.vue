<template>
    <div class="order">
        <header>
            <img src="../../assets/MineImg/vipClub/形状 1@2x.png" alt="" @click="onClickLeft">
            <van-dropdown-menu active-color="#FF2661" >
                <van-dropdown-item v-model="value" :options="option" />
            </van-dropdown-menu>
             
        </header>
        <!-- 订单类型 -->
        <van-tabs 
        v-model="active"
         swipeable 
         line-width="27" 
         line-height="2" 
         animated 
         :ellipsis="false" 
         title-active-color="#FF1353" 
         duration='0.1'
         > 
            <van-tab v-for="(item,index) in titles" :key="index" :title="item ">
                <van-divider />
                <!-- 没有订单空白页 -->
                <van-empty
                    class="custom-image"
                    :image="whitepic"
                    description="暂无此类订单"
                    v-if="orderList"
                />
                <!-- 订单详情 -->
                <section v-else>
                    <h3>
                        [杭州站]夏日入侵企画「想去海边」
                        <span>待付款</span>
                    </h3>
                    <div class="order-meg">
                        <img src="../../assets/MineImg/图片 拷贝@2x.png" alt="">
                        <div class="list-meg">
                            <p>场次:2020年09月18日周五20:30</p>
                            <p>地址:MAO Livehouse</p>
                            <p>票档:100早鸟票</p>
                            <p>数量:x1</p>
                        </div>
                    </div>
                    <van-divider />
                    <div class="pay-order">
                        <span>231元</span>
                        <div class="btn">
                            <button class="cancle">取消订单</button>
                            <!-- <button>删除订单</button> -->
                            <button class="pay">立即付款</button>
                        </div>
                    </div>
                </section>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import white from '../../assets/MineImg/组 4@2x.png'

export default {
    data() {
        return {
            value: 0,
            option: [
                { text: '我的订单', value: 0 },
                { text: '拼团订单', value: 1 },
                { text: '抢票订单', value: 2 },
                { text: '求票订单', value: 3 },
                { text: 'sku订单', value: 4 },
            ],
            items:'我的订单',
            active: 0,
            titles:['全部','待付款','待发货','待收货','待评价'],
            whitepic:white,
            orderList:'',
        }
    },
    methods: {
        optionchange(val) {
            this.items = this.option(val)
            console.log(val)
        },
        onClickLeft() {
            this.$router.go(-1)
        },
    },
    mounted() {
        this.active = Number(this.$route.query.order) + 1 || 0
        console.log(this.active)
    },
    
}
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .order {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #F2F2F2;

        // 头部导航
        header {
            height: 36px;
            width: 100%;
            color: #545454;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0.00333rem 0.52rem rgba(100,101,102,.12);
            font-weight: bold;
            background: white;
            img {
                width: 27px;
                height: 27px;
                position: absolute;
                top: 5px;
                left: 10px;
            }
            .van-dropdown-menu {
                height: 100%;
                &::v-deep .van-dropdown-menu__bar {
                    height: 100%;
                    box-shadow:none;
                    color: #535353;
                }
                &::v-deep .van-cell {
                    padding: 0 10px;
                    width: 104px;
                    height: 36px;
                    border: 1px solid;
                    margin-top: 21px;
                    margin-right: 15px;
                    padding: 0;
                    text-align: center;
                    line-height: 38px;
                    color: #535353;
                    &:nth-child(3n) {
                        margin-right: 0;
                    }
                }
                &::v-deep .van-popup {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: s;
                    padding: 21px 14px 30px;
                    box-sizing: border-box;
                    
                }
                &::v-deep .van-cell__value {
                    display: none;
                }
            }
        }

        // 订单状态tab
        .van-tabs {
            width: 100%;
            margin-top: 3px;
            height: 35px;
            &::v-deep .van-tabs__wrap {
                height: 100%;
                &::v-deep .van-tabs__nav {
                     height: 100%;
                    padding: 0;
                }
                .van-tab {
                    height: 100%;
                    font-size: 12px;
                    color: #202020;
                    font-weight: bold;
                }
                .van-tabs__line {
                    background-color:#FF1353
                }
            }
            
        }
        // 空白状态
        &::v-deep .custom-image .van-empty__image {
            width: 81px;
            height: 81px;
            margin-top: 154px;
        }
        //订单详情
        section {
            height: 174px;
            padding: 20px 13px 0 12px;
            display: flex;
            flex-direction: column;
            font-size: 11px;
            color: #4D4D4D;
            margin-bottom: 10px;
            background: white;
            h3 {
                font-size: 15px;
                line-height: 15px;
                position: relative;
                span {
                    position: absolute;
                    right: 0;
                    top: 1px;
                    font-size: 11px;
                    color: #FF2560;
                }
            }
            .order-meg {
                height: 69px;
                display: flex;
                align-items: center;
                margin: 14px 0 15px;
                img {
                    width: 53px;
                    height: 69px;
                    margin-right: 15px;
                }
                .list-meg {
                    height: 63px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
            }
            .pay-order {
                height: 41px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                button {
                    width: 72px;
                    height: 27px;
                    border: 1px solid #E3E3E3;
                    border-radius: 14px;
                    outline: none;
                    font-size: 13px;
                    color: black;
                    margin-left: 10px;
                    background: white;
                }
                .pay {
                    color: white;
                    background: #FF2661;
                }
            }
        }
    }
</style>