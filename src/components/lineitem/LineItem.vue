<template>
    <div class="order-details-container">
         <van-nav-bar title="订单详情" left-text="" left-arrow fixed placeholder @click-left="goBack">
        </van-nav-bar>
        <div class="wait-pay">
            <h6>待付款 
                <i><img src="../../assets/订单详情_slices/形状 1 拷贝.png" alt="" /></i>
            </h6>
            <p>支付剩余时间: {{laterTimer}}</p>
        </div>
        <div class="custom-Info">
            <div class="info">
                <h5>快递配送</h5><span>{{customName}}</span><em>{{customPhone}}</em>
            </div>
            <div class="address-Info">寄送地址：{{sendAddress}}</div>
        </div>
        <section>
           <div class="section-top">
                <div class="ticket">
                    <div class="right-power">
                        <div class="left">票品提供：<span>仔仔票务</span><div class="power-show">
                                <img src="../../assets/订单详情_slices/矩形 5 拷贝.png" alt="" class="img1">
                                <img src="../../assets/订单详情_slices/形状 2.png" alt="" class="img2">
                                <img src="../../assets/订单详情_slices/资质认证.png" alt="" class="img3">
                        </div>
                    </div>
                    <div class="right">预计9月9日前发货</div>
                </div>
                <div class="ticket-info">
                    <div class="info-left">
                        <h6>{{showTitle}}</h6>
                        <p>{{showTime}}</p>
                        <p>{{showEn}}</p>
                        <p>票档:100早鸟票  × <span>{{showNum}}</span></p>

                    </div>
                    <div class="info-right">
                        <img src="../../assets/订单详情_slices/图层 1.png" alt="">
                    </div>
                </div>
                    <div class="ticket-bottom">
                        <span><i></i>不支持退换</span>
                        <span><i></i>无票赔付最高100元</span>
                    </div>
                </div>
                <div class="serve-money">
                    <h5>服务费：{{serveMoney}}</h5>
                    <p>票档:服务费  ×<span>{{showNum}}</span></p>
                </div>
                <div class="show-address">
                    <van-cell title="场馆地址" is-link value="杭州市上城区中山南路7号尚城1157利星3楼" />
                </div>
           </div>
           <div class="section-middle">
               <p>订单信息</p>
               <van-cell title="支付金额" :value="ticketPrice+'元'" is-link  value-class="price" />
               <van-cell title="订单编号" :value="Serialnumber" is-link />
               <van-cell title="下单时间" :value="orderTimer" is-link />
           </div>
        </section>
        <div class="footer">
            <div class="connect-server">
                联系客服
            </div>
            <div class="cancel-order">
                取消订单
            </div>
            <div class="buy-now">
                {{ticketPrice}}元，立即支付
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            laterTimer:'14分38秒',
            customName:'陈志龙',
            customPhone:'13185985587',
            sendAddress:'北京市 北京市 东城区 陈志龙',
            showTitle:'【杭州站】夏日入侵企画 想去海边',
            showTime:'2020年09月18日 周五 20:30',
            showEn:'MAO Livehouse',
            showNum:'1',
            serveMoney:'12',
            Serialnumber:'1441604',
            orderTimer:'2020-09-02 11:05:35',
            ticketPrice:'251'
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="scss">
    .order-details-container{
         .van-nav-bar{
            height: 44px;
            .van-icon-arrow-left{
                width: 12px;
                height: 19px;
                color: #000;
            }
            .van-nav-bar__title{
                font-family: Bold;
                font-size: 16px;
                font-weight: bold;
                color: #535353;
                line-height: 44px;
            }
        }
        .wait-pay{
            width: 375px;
            height: 127px;
            background: #FF2662;
            box-sizing: border-box;
            padding: 19px 0 0 20px;
            h6{
                height: 22px;
                font-size: 22px;
                font-family: Bold;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 22px;
                margin: 0;
                i{
                    display: inline-block;
                    width: 5px;
                    height: 9px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            p{
                height: 12px;
                font-size: 12px;
                font-family: Regular;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 12px;
                margin: 8px 0;
            }
        }
        .custom-Info{
            width: 360px;
            height: 76px;
            border-radius: 10px;
            background: #fff;
            position: absolute;
            top: 115px;
            left: 10px;
            box-shadow: 0 1px 5px 1px #edecec;
            box-sizing: border-box;
            padding: 16px 0 0 22px;
            .info{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                 h5{
                    margin: 0;
                    width: 49px;
                    height: 18px;
                    border: 1px solid #FF1052;
                    border-radius: 2px;  
                    font-size: 12px;
                    font-family: Light;
                    font-weight: bold;
                    color: #FF386E;
                }
                span{
                    display: inline-block;
                    height: 12px;
                    font-size: 12px;
                    font-family: Bold;
                    font-weight: bold;
                    color: #252525;
                    line-height: 12px;
                    margin: 0 5px 0 10px;
                }
                em{ 
                    height: 12px;
                    font-size: 12px;
                    font-family: Bold;
                    font-weight: bold;
                    color: #252525;
                    line-height: 12px;
                }
            }
           .address-Info{
                height: 12px;
                font-size: 12px;
                font-family: Regular;
                font-weight: bold;
                color: #8E8E8E;
                line-height: 12px;
                margin-top: 13PX;
           }
        }
        section{
            background: #f1f1f1;
            margin-top: 33px;
            padding-bottom: 44px;
            .section-top{
                background: #fff;
                .ticket{
                    width: 363px;
                    height: 159px;
                    background: url('../../assets/订单详情_slices/矩形 7.png') no-repeat;
                    background-size: contain;
                    margin-left: 7px;
                    box-sizing: border-box;
                    padding: 18px 15px;
                    .right-power{
                        display: flex;
                        justify-content: space-between;
                        .left{
                            display: flex;
                            height: 12px;
                            font-size: 12px;
                            font-family: Regular;
                            font-weight: bold;
                            color: #969696;
                            line-height: 12px;
                            span{
                                margin-left: 5px;
                                color: #4b8eea;
                            }
                            .power-show{
                                width: 52px;
                                height: 14px;
                                background: url('../../assets/订单详情_slices/矩形 5.png') no-repeat;
                                background-size: contain;
                                margin-left: 5px;
                                position: relative;
                                .img1{
                                    width: 13px;
                                    height: 14px;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                }
                                .img2{
                                    width: 9px;
                                    height: 7px;
                                    position: absolute;
                                    left: 3px;
                                    top: 3px;
                                    z-index: 1;
                                }
                                .img3{
                                    width: 33px;
                                    height: 8px;
                                    position: absolute;
                                    left: 16px;
                                    top: 3px;
                                }
                            }
                        }
                        .right{       
                            height: 12px;
                            font-size: 12px;
                            font-family: Regular;
                            font-weight: bold;
                            color: #A2A2A2;
                            line-height: 12px;
                        }
                    }
                    .ticket-info{
                        margin-top: 16px;
                        display: flex;
                        justify-content: space-between;
                        .info-left{
                            h6{    
                                margin: 0;
                                width: 265px;
                                height: 16px;
                                font-size: 16px;
                                font-family: Bold;
                                font-weight: bold;
                                color: #262626;
                                line-height: 16px;
                                box-sizing: border-box;
                                padding-left: 10px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                            p{   
                                margin: 0;
                                margin-top: 10px;
                                height: 12px;
                                font-size: 12px;
                                font-family: Regular;
                                font-weight: bold;
                                color: #969696;
                                line-height: 13px;
                            }
                        }
                        .info-right{
                            width: 37px;
                            height: 49px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    .ticket-bottom{ 
                        span{
                            height: 12px;
                            font-size: 12px;
                            font-family: Regular;
                            font-weight: bold;
                            color: #3E86EA;
                            line-height: 12px;
                            margin-right: 20px;
                            i{
                                display: inline-block;
                                width: 11px;
                                height: 11px;
                                // border: 1px solid #3E86EA;
                                border-radius: 50%;
                                background: url('../../assets/订单详情_slices/形状 2.png') no-repeat center;
                                background-color: #4b8eea;
                                background-size: 5px;
                            }
                        }
                    }
                }
                .serve-money{
                    width: 359px;
                    height: 79px;
                    background: #FFFFFF;
                    border: 1px solid #ECECEC;
                    border-radius: 6px;
                    margin: 10px 8px;
                    box-sizing: border-box;
                    padding: 17px 16px;
                    h5{    
                        margin: 0;
                        height: 16px;
                        font-size: 16px;
                        font-family: Bold;
                        font-weight: bold;
                        color: #262626;
                        line-height: 16px;
                    }
                    p{
                        margin: 0; 
                        height: 12px;
                        font-size: 12px;
                        font-family: Regular;
                        font-weight: bold;
                        color: #969696;
                        line-height: 12px;
                        margin-top: 13px;
                    }
                }
                .show-address{
                    width: 361px;
                    border-top: 1px solid #F2F2F2;
                    margin-left: 8px;
                    position: relative;
                    .van-cell--clickable{
                        padding: 0 28px 0 8px;
                        line-height: 24px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .van-cell__title{
                        flex: none;
                        width: 51px;
                        font-size: 12px;
                        font-family: Bold;
                        font-weight: bold;
                        color: #262626;
                    }
                    .van-cell__value{
                        flex: none;
                        width: 260px;
                        font-size: 12px;
                        font-family: Regular;
                        font-weight: bold;
                        color: #969696;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .van-cell__right-icon{
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        right: 14px;
                    }
                }
            }
            .section-middle{
                background: #fff;
                margin: 10px 0;
                p{
                    height: 40px;
                    font-size: 12px;
                    font-family: Bold;
                    font-weight: bold;
                    color: #262626;
                    line-height: 40px;
                    box-sizing: border-box;
                    padding-left: 14px;
                }
                .van-cell__title{ 
                    font-size: 12px;
                    font-family: Regular;
                    font-weight: bold;
                    color: #262626;
                }
                .van-cell__value{  
                    font-size: 12px;
                    font-family: Regular;
                    font-weight: bold;
                    color: #A7A7A7;
                }
                .price{                   
                    font-family: #262626;
                    font-weight: bold;
                    color: #262626;
                }
            }
        }
        .footer{
            background: #fff;
            width: 100%;
            height: 44px;
            position: fixed;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            box-sizing: border-box;
            padding-right: 12px;
            .connect-server,.cancel-order{
                width: 75px;
                height: 29px;
                border: 1px solid #E7E7E7;
                border-radius: 15px;               
                font-size: 12px;
                font-family: Regular;
                font-weight: bold;
                color: #262626;
                line-height: 29px;
                text-align: center;
                margin-right: 8px;
            }
            .buy-now{
                width: 118px;
                height: 29px;
                background: #FF2662;
                font-size: 12px;
                font-family: Regular;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 29px;
                border-radius: 15px;            
                text-align: center; 
            }
        }
    }
</style>