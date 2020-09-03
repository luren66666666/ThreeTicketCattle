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
            <div class="divpiao" v-for="(value,index) in 6" :key="index" @click.stop="img2box">
                <span>100早鸟票</span>
            </div>
            <van-cell is-link @click="showPopup" v-show="false">展示弹出层</van-cell>
            <van-popup v-model="show" position="bottom" :style="{ height: '45%' }">
                <div class="imgpiao">
                    <img src="../../assets/images/票牛-立即购票/矩形 11.png" alt="" class="img1">
                    <span class="span1">100早鸟票</span>
                    <span class="span2">×</span>
                </div>
                <div class="boxquyu">
                    <img src="../../assets/images/票牛-立即购票/矩形 1 拷贝 3.png" alt="" class="img2">
                    <span class="span3">区域随机</span>
                    <span class="span4">仅剩<span class="span5">6</span>张</span>
                </div>
                <span class="span6">已经到底了</span>
                <div class="footdiv">
                    <span class="span1">选择数量</span>
                    <span class="span2">3张以内保证连坐</span>
                    <img src="../../assets/images/票牛-立即购票/矩形 8.png" alt="" class="img1">
                    <span class="span3">1</span>
                    <img src="../../assets/images/票牛-立即购票/矩形 8 拷贝 2.png" alt="" class="img2">
                </div>
            </van-popup>
        </div>

        <div class="img2box" @click="img2box">
            <img src="../../assets/images/票牛-立即购票/矩形 3.png" alt="" class="img2" >
            <span class="span7">已选：区域随机<span>1张</span></span>
            <span class="span8">选择数量</span>
            <van-icon name="arrow" />
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
            <img src="../../assets/images/票牛-立即购票/圆角矩形 2.png" alt="" class="img1">
            <span class="span6">确认</span>
            
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        showPopup() {
            this.show = true;
        },
        img2box(){
            this.showPopup();
        }
    },
    data(){
        return {
             show: false,
        }
    }
}
</script>
<style lang="scss">
// @import '@/assets/style/reset.scss';
    .Buy-tickets-immediately{
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        // background-color: white;
        .van-nav-bar{
            height: 36px;
            position: relative;
            // border-bottom: 1px solid #A0A0A0;
            .van-nav-bar__left{
                margin-left: 12px;
                .van-icon{
                    font-size: 23px;
                    color: black;
                }
            }
            .van-nav-bar__title{
                margin-left: 155px;
                font-size: 17px;
                font-family: Medium;
                color: #040000;
                font-weight: 600;
            }
            .van-nav-bar__right{
                margin-right: 8px;
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
            .van-popup{
                .imgpiao{
                    width: 90px;
                    height: 25px;
                    position: absolute;
                    top: 9px;
                    .img1{
                        width: 100%;
                        height: 100%;
                    }
                    .span1{
                        position: absolute;
                        left: 11px;
                        top: 5px;
                        font-size: 11px;
                        font-family: Regular;
                        color: #FFFFFF;
                    }
                    .span2{
                        position: absolute;
                        left: 75px;
                        top: 5px;
                        font-size: 16px;
                        color: #FFFFFF;
                    }                 
                }
                .boxquyu{
                    width: 338px;
                    height: 35px;
                    position: absolute;
                    top: 45px;
                    left: 19px;
                    .img2{
                        width: 100%;
                        height: 100%;
                    }
                    .span3{
                        position: absolute;
                        top: 10px;
                        left: 15px;
                        font-size: 13px;
                        font-family: Medium;
                        color: #FF2661;
                    }
                    .span4{
                        position: absolute;
                        top: 10.5px;
                        left: 74px;
                        font-size: 12px;
                        font-family: Regular;
                        color: #919292;
                        // .span5{

                        // }
                    }
                }
                .span6{
                    position: absolute;
                    top: 102px;
                    left: 159px;
                    font-size: 12px;
                    font-family: Regular;
                    color: #7E7E7E;
                }
                .footdiv{
                    width: 100%;
                    height: 45px;
                    position: absolute;
                    bottom: 43px;
                    .span1{
                        position: absolute;
                        top: 10px;
                        left: 11px;
                        font-size: 13px;
                        font-family: Medium;
                        color: #242424;
                    }
                    .span2{
                        position: absolute;
                        top: 27px;
                        left: 11px;
                        font-size: 9px;
                        font-family: Regular;
                        color: #919191;
                    }
                    .img1{
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        left: 275px;
                        top: 10px;
                        opacity: 0.5;
                    }
                    .span3{
                        position: absolute;
                        top: 17px;
                        left: 317px;
                        font-size: 13px;
                        font-family: Medium;
                        color: #242424;
                    }
                    .img2{
                        width: 25px;
                        height: 25px;
                        position: absolute;
                        left: 339px;
                        top: 10px;
                    }  
                }
            }
        }
        .img2box{
            width: 346px;
            height: 41px;
            position: absolute;
            bottom: 48px;
            left: 14px;
            .span7{
                white-space: nowrap;
                position: absolute;
                left: 11px;
                top: 10px;
                font-size: 13px;
                font-family: Medium;
                color: #FFFEFE;
                span{
                    color: #FFFEFE;
                }
            }
            .span8{
                white-space: nowrap;
                position: absolute;
                left: 271px;
                top: 10px;
                font-size: 13px;
                font-family: Light;
                color: #FFFEFE;
            }
            .img2{
                z-index: -1;
                width: 346px;
                height: 41px;
                position: absolute;
                top: 0px;
            }
            .van-icon{
                font-size: 14px;
                color: white;
                position: absolute;
                left: 327px;
                top: 12px;
            }
        }
        
        .boxfoot{
            z-index: 3000;
            width: 100%;
            height: 42px;
            background-color: white;
            position: fixed;
            border-top: 1px solid #eeeeee;
            bottom: 0px;
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
            .img1{
                width: 95px;
                height: 37px;
                position: absolute;
                right: 11px;
                top: 3px;
            }
            .span6{
                position: absolute;
                right: 44px;
                top: 11px;
                font-size: 15px;
                font-family: Regular;
                color: #FFFEFE;
            }
        }
    }
</style>