<template>
    <div class="Buy-tickets-immediately" >
        <!-- 顶部导航栏 -->
        <van-nav-bar title="立即购票"  left-arrow fixed :placeholder="true"  >
            <template #right>
                <van-icon name="warning-o" size="18" />
            </template>
        </van-nav-bar>

        <p class="ptime">选择场次</p>
        <div class="divtime">
            <span>2020年09月18日 周五 20:30</span>
        </div>
        <div class="divtime"></div>
        <div class="divtime"></div>
        <p class="ppiao">选择场次</p>
        <div class="divpiaobox">
            <div class="divpiao" v-for="(value,index) in 5" :key="index">
                <span>100早鸟票</span>
            </div>
        </div>

        <!-- 底部 -->
        <div class="boxfoot">
            <div class="title">
                <span class="span1">合计：</span>
                <span class="span2">239</span>
                <span class="span3">元</span>
            </div>
            <div class="price">
                <span class="span4">
                    <span class="span5">239</span>/张
                </span>
            </div>
            <img src="../../assets/images/票牛-立即购票/圆角矩形 2.png" alt="">
            <span class="span6">确认</span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
// @import '@/assets/style/reset.scss';
    .Buy-tickets-immediately{
        // background-color: white;
        .van-nav-bar{
            height: 36px;
            // border-bottom: 1px solid #A0A0A0;
            .van-nav-bar__left{
                .van-icon{
                    font-size: 23px;
                    color: black;
                }
            }
            .van-nav-bar__title{
                font-size: 17px;
                font-family: Medium;
                color: #040000;
                font-weight: 600;
            }
            .van-nav-bar__right{
                .van-icon{
                    font-size: 20px;
                    color: black;
                }
            }
        }
        .ptime{
            font-size: 14px;
            font-family: Medium;
            color: #040000;
            margin-top: 22px;
            margin-left: 15px;
            margin-bottom: 23px;
            font-weight: 600;
        }
        .divtime{
            width: 346px;
            height: 38px;
            background-color: #FFF1F4;
            margin-left: 15px;
            margin-top: 12px;
            display: flex;
            align-items: center;
            span{
                font-size: 14px;
                font-family: Medium;
                color: #FF2661;
                margin-left: 11px;
            }
        }
        .ppiao{
            font-size: 14px;
            font-family: Medium;
            color: #040000;
            margin-top: 36px;
            margin-left: 15px;
            margin-bottom: 24px;
            font-weight: 600;
        }
        .divpiaobox{
            width: 349px;
            margin-left: 15px;
            display: flex;
            justify-content: space-between;
            flex-wrap:wrap ;
                .divpiao{
                width: 167px;
                height: 38px;
                background-color: #F8F8F8;
                // margin-left: 15px;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                span{
                    font-size: 14px;
                    font-family: Medium;
                    color: #141414;
                    margin-left: 11px;
                }
            }
        }
        .boxfoot{
            width: 100%;
            height: 42px;
            // background-color: red;
            position: fixed;
            bottom: 1px;
            .title{
                // height: 13px;
                position: absolute;
                left: 11px;
                top: -2px;
                .span1{
                    font-size: 14px;
                    font-family: Medium;
                    color: #272727;
                }
                .span2{
                    font-size: 14px;
                    font-family: Medium;
                    color: #FF2762;
                }
                .span3{
                    font-size: 14px;
                    font-family: Medium;
                    color: #909090;
                }
            }
            .price{
                position: absolute;
                left: 48px;
                top: 26px;
                font-size: 9px;
                font-family: Light;
                color: #909090;
            }
            img{
                width: 95px;
                height: 37px;
                position: absolute;
                right: 11px;
                top: 5px;
            }
            .span6{
                position: absolute;
                right: 44px;
                top: 12px;
                font-size: 15px;
                font-family: Regular;
                color: #FFFEFE;
            }
        }
        
    }
</style>