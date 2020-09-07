<template>
    <div class="confirmorder_warp">
        <!-- 头部 "每日奖励" -->
        <van-nav-bar
        title="确认订单"
        left-arrow
        @click-left="onClickLeft"
        class="confirmorder-van-nav-bar__title"
        />
        <!-- -----------------------订单信息------------------------------- -->
        <div class="order-Information">
            <div class="order-Information_top">
                <p>
                    <span class="offer">票品提供：</span>
                    <span class="zaizai">仔仔票务</span>
                    <span class="warp">
                        <span class="right">v</span>
                        <span class="approve">资质认证</span>
                    </span>
                </p>
                <span class="shipments">预计9月9日前发货</span>
            </div>
            <div class="order-Information_middle">
                <main>
                    <span class="title">【杭州站】夏日入侵企画想去海边</span>
                    <span class="times">2020年09月18日 周五 20:30</span>
                    <span class="site">MAO Livehouse</span>
                    <span class="Ticket-file">票档:100早鸟票 <b>×1</b></span>
                </main>
                <div class="imgBox">
                    <img :src="img" alt="">
                </div>
            </div>
            <div class="order-Information_bottom">
                <span><van-icon name="passed" />不支持退换</span>
                <span style="margin-left:10px"><van-icon name="passed" />无票赔付最高100元</span>
            </div>
        </div>

        <!-- 服务费 -->
        <div class="service-charge">
            <span class="service-charge-money">
                服务费：12
            </span>
            <span >
                票档:服务费 × 1
            </span>
        </div>

        <!-- ---------收货地址---------- -->
        <div class="shopping-address">
            <div class="way-warp">
                <div class="way">取票方式</div>
                <button class="way-right">快递寄送</button>
            </div>
            <van-cell title="收货地址" is-link value="新增" title-style="color:#252525;font-size:14px;font-weight:700" value-class="value-right" @click="showadd"/>
            <van-popup v-model="show" position="right" :style="{ width: '100%',height :'100%'}"
            closeable close-icon-position="top-left"
            >
                <p class="newadd">新增地址</p>
                <van-address-edit
                show-delete
                show-set-default
                show-search-result
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
                />
            </van-popup>
        </div>
        <!-- ---------优惠券/礼品 -->
        <div class="coupon-warp">
            <!-- ------优惠券-------- -->
            <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
            />
            <!-- 优惠券列表 -->
            <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px;"
            >
            <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
                @change="onChange"
                @exchange="onExchange"
            />
            </van-popup>
            <!-- -----------礼品卡-------- -->
            <div class="card-warp">
                <div class="card">礼品卡</div>
                <span class="card-right">无可用礼品卡</span>
            </div>
        </div>
        <!-- -----同意条款--- -->
        <p class="clause">
            <van-field name="checkbox">
                <template #input>
                    <van-checkbox v-model="checkbox" shape="square" />
                </template>
            </van-field>
            已阅读并同意<b style="color:#3D85E9">[交易服务协议]</b>
            </p>

            <!-- -------底部----------- -->
            <div class="confirm-footer">
                <div class="confirm-warp">
                    <span class="confirm-price">
                    <b>251</b>元
                    </span>
                    <p class="confirm-footer-right">
                        <span class="confirm-minxi">明细</span>
                        <span class="confirm-btn" @click="toPayOrder">确认下单</span>
                    </p>
                </div>
            </div>
         </div>
</template>


<script>
import img08 from '../../assets/dailyReward-img/08.png'
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};
export default {
    methods: {
        onClickLeft( ) {
            this.$router.go(-1)
        },
        showadd() {
            this.show = true
        },
        showcard() {
            this.show = true
        },
        onSave() {
            Toast('save');
            },
        onDelete() {
            this.$toast.success('删除成功')
        },
        onChangeDetail(val) {
           console.log(1);
        },
        onChange(index) {
        this.showList = false;
        this.chosenCoupon = index;
        },
        onExchange(code) {
        this.coupons.push(coupon);
        },
        toPayOrder() {
            this.$router.push('/payorder')
        }
    },
    
    data() {
        return {
            img:img08,
            show:false,
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
            showList:false,
            checkbox: true,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/dailyReward.scss';
    
    .confirmorder_warp{
        position: fixed;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #F3F3F3;
        .confirmorder-van-nav-bar__title{
            height: 45px;
            width: 100%;
        }
        .order-Information{
            width: 360px;
            height: 154px;
            background: #ffffff;
            border-radius: 5px;
            margin-top: 8px;
            display: flex;
            flex-direction: column;
            .order-Information_top{
                font-size: 10px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                color: #A1A1A1;
                p{
                    display: flex;
                    align-items: center;
                    .offer{
                    color: #959595;
                    }
                    .zaizai{
                        color: #3D85E9;
                    }
                    .warp{
                        display: flex;
                        border: 1px solid #3D85E9;
                        line-height: 13px;
                        color: #3D85E9;
                        .right{
                        display: block;
                        width: 13px;
                        height: 13px;
                        background: #3D85E9;
                        color: #ffffff;
                        text-align: center;
                        line-height: 13px;
                        font-size: 8px;
                        }
                    }
                    
                }
                
            }
            .order-Information_middle{
                display: flex;
                justify-content: space-around;
                font-size: 10px;             
                color: #A1A1A1;
                main{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    .title{
                        font-size: 16px;
                        font-weight: 700;
                        color: #000000;
                        width: 240px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    span{
                        margin-top: 5px;
                    }
                }
                .imgBox{
                    width: 36px;
                    height: 49px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .order-Information_bottom{
                color: #3D85E9;
                font-size: 8px;
                margin-left: 17px;
                margin-top: 5px;
            }
        }
        .service-charge{
            width: 360px;
            height: 87px;
            margin-top: 8px;
            background: #ffffff;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            font-size: 10px;
            justify-content: space-evenly;
            text-indent: 20px;
            .service-charge-money{
                font-size: 16px;
                font-weight: 700;
            }
            
        }
        .shopping-address{
            width: 100%;
            height: 97px;
            background: #ffffff;
            margin-top: 9px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            .way-warp{
                width: 360px;
                height: 55px;
                border-bottom: 1px solid #eeeeee;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .way{
                    font-size: 14px;
                    font-weight: 700;
                    color: #252525;
                    margin-left: 10px;
                }
                .way-right{
                    width: 65px;
                    height: 27px;
                    border: 1px solid #FF2561;
                    border-radius: 4px;
                    font-size: 12px;
                    color: #FF2963;
                    background: #ffffff;
                    margin-right: 10px;
                }
                
            }
            .newadd{
                width: 100%;
                height: 30px;
                margin: 0px;
                font-size: 18px;
                text-align: center;
                line-height: 30px;
            }
        }
        .coupon-warp{
            width: 100%;
            height: 90px;
            background: #ffffff;
            margin-top: 9px;
            .card-warp{
                width: 360px;
                height: 45px;
                
                display: flex;
                justify-content: space-between;
                align-items: center;
                .card{
                    margin-left: 12px;
                    font-size: 14px;
                    font-weight: 700;
                }
                .card-right{
                    margin-right: 10px;
                    font-size: 12px;
                    color: #999999;
                }
            }
        }
        .clause{
            width: 360px;
            display: flex;
            font-size: 12px;
            align-items: center;
        }
        .confirm-footer{
            width: 100%;
            height: 75px;
            position: fixed;
            bottom: 0px;
            left: 0px;
            background: #ffffff;
            font-size: 12px;
           
            .confirm-warp{
                
                display: flex;
                justify-content: space-between;
                align-items: center;
                .confirm-price {
                    margin-left: 10px;
                   
                b{
                    color: #FF2560;
                    font-size: 18px;
                    }
                }
                .confirm-footer-right{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0px;
                    .confirm-minxi{
                        color: #0F0F0F;
                        margin-right: 26px;
                    }
                    .confirm-btn{
                        width: 138px;
                        height: 44px;
                        background: #FF2661;
                        color: #ffffff;
                        text-align: center;
                        line-height: 44px;
                        font-size: 16px;
                    }
                }
            }
            
        }
    }
    
    .value-right{
            font-size: 12px;
            color: #FF2963;
        }
    .van-address-edit{
        margin-top: 20px;
    }
    .van-cell__title{
        color: #000000;
        font-weight: 700;
    }
    .van-field{
        width: 20px;
        height: 20px;
        padding: 0px;
    }
</style>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       