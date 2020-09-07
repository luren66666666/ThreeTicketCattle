<template>
    <div class="buyticket-container">
        <div class="background-img"></div>
        <div class="top-title1" v-if="showColor">
            <van-nav-bar title="演出详情" left-text="" left-arrow fixed placeholder @click-left="goBack">
                <template #right>
                    <van-icon name="cluster-o" size="18" />
                </template>
            </van-nav-bar>
        </div>
        <div class="top-title2" v-else>
            <van-nav-bar title="" left-text="" left-arrow fixed placeholder @click-left="goBack" >
                <template #right>
                    <van-icon name="cluster-o" size="18" />
                </template>
            </van-nav-bar>
        </div>
        <div class="details-info">
            <div class="info-content">
                <div class="imgbox">
                    <img src="../../assets/票牛-购票_slices/图片 拷贝.png" alt="">
                </div>
                <div class="show-info">
                    <div class="title">{{title}}</div>
                    <p>{{pingfen}}</p>
                    <div class="pri"><span>{{showInfo}}</span>元起</div>
                </div>
            </div>
            <div class="info-btn">
                <span class="wantsee">
                    <i>
                        <img src="../../assets/票牛-购票_slices/圆角矩形 2 拷贝.png" alt="">
                    </i>
                    <em>想看</em>
                </span>
                <span class="wantsay">
                    <i>
                        <img src="../../assets/票牛-购票_slices/组 3.png" alt="">
                    </i>
                    <em>评价</em>
                </span>
            </div>
        </div>
        <section>
            <div class="section-top">
                <p>2020.08.22  16:30</p>
                <h2 class="address"><span>金华磐安花溪风景区</span> <van-icon name="location-o"  /></h2>
                <h3 @click="showDetailInfo"><span>购票须知</span> <van-icon name="arrow" /></h3>
                <van-popup v-model="show1" position="bottom"  :style="{ height: '60%' }">
                    <van-tabs @click="onClick">
                        <van-tab title="入场凭证">
                             <van-cell  title="电子票" icon="passed" label="本项目支持凭电子票入场"  />
                        </van-tab>
                        <van-tab title="观影须知">
                            <van-cell center title="限购说明" icon="passed" label="每单限购六张"  />
                            <van-cell center title="座位类型" icon="passed" label="请按门票对应座位，有序对号入座"  />
                            <van-cell center title="儿童入场提示" icon="passed" label="1.2以上凭票入场，1.2以下谢绝入场"  />
                            <van-cell center title="禁止携带物品" icon="passed" label="食品、饮料、相机、充电宝、打火机等"  />
                        </van-tab>
                    </van-tabs>
                    <span class="cancle" @click="onCancel1">关闭</span>
                </van-popup>
                <h3 @click="platformSecurity"><span v-for="(item,index) in baozhang" :key="index">{{item}}</span><van-icon name="arrow" /></h3>
                <van-popup v-model="show" position="bottom"  :style="{ height: '60%' }">
                    <h4>平台保障</h4>
                    <van-cell center title="无票赔付" icon="passed" label="无票就赔，最高退一赔一" is-link />
                    <van-cell center title="出票保真" icon="passed" label="平台审核担保，假一赔三" is-link />
                    <van-cell center title="配送保障" icon="passed" label="多种取票方式，安全送达" is-link />
                    <span class="cancle" @click="onCancel">关闭</span>
                </van-popup>
                <div class="address-box">
                    <div class="address-move">
                        <div class="address-item " v-for="(item,index) in addInfo" :key="index" :class="{active:index===isActive}" @click="isActive=index">
                            <h4>{{item.address}}</h4>
                            <p>{{item.date}}</p>
                        </div>
                     </div>
                </div>
                
            </div>

            <DetailSection />

        </section>
        <ToBuy />
    </div>
</template>
<script>
import DetailSection from './DetailSection';
import ToBuy from './ToBuy';
export default {
    data() {
        return {
            show1:false,
            show:false,
            actions: [],
            title:'「痛仰/霍尊」中国·磐安2020氧 气山水音乐节',
            pingfen:'暂无评分',
            showInfo:'408',
            baozhang:['平台保障','无票赔付','出票保真','配送保障'],
            addInfo:[
                {
                    address:'张家口',
                    date:'8.15'
                },
                {
                    address:'张家口',
                    date:'8.15'
                }
            ],
            isActive:0,
            showColor:false
        }
    },
    components:{
        DetailSection,
        ToBuy
    },
   mounted() {
      window.addEventListener('scroll',this.scrollHandle)
   },
    destroyed(){
        window.removeEventListener('scroll',this.scrollHandle);
    },
     methods:{
        scrollHandle(){
           let scroll = document.documentElement.scrollTop||document.body.scrollTop;
            if(scroll>=50){
                this.showColor = true;
            }else {
                this.showColor = false;
            }
         } ,
        goBack(){
            this.$router.go(-1);
        },
        platformSecurity(){
            this.show = true;
        },
        onCancel(){
            this.show = false;
        },
        showDetailInfo(){
            this.show1 = true;
        },
        onCancel1(){
            this.show1 = false;
        },
        onClick(name, title){

        }
     }
}
</script>

<style lang="scss">
@import '@/assets/style/reset.scss';
    .buyticket-container{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9;
        background: #fff;
        .background-img{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 234px;
            filter: blur(1px);
            background-size: cover;
            background-repeat: no-repeat;
            z-index: -1;
            overflow: hidden;
            background-image: url('../../assets/票牛-购票_slices/组 10.png');
        }
        .van-nav-bar{
            height: 44px;
            background: rgba(255,255,255,.95);
            .van-icon-arrow-left{
                width: 12px;
                height: 19px;
                color: #000;
            }
            .van-nav-bar__title{
                font-size: 15px;
            }
            .van-icon-cluster-o{
                width: 15px;
                height: 16px;
                color: #000000;
            }
        }
        .top-title2{
            .van-nav-bar{
                background: transparent;
            }
        }
        .details-info{
            width: 100%;
            height: 180px;
            box-sizing: border-box;
            padding: 15px 30px 15px 14px;
          .info-content {
              display: flex;
                .imgbox{
                    width: 88px;
                    height: 116px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .show-info{
                    width: 230px;
                    height: 116px;
                    margin-left: 14px;
                    .title{
                        width: 229px;
                        height: 38px;
                        font-size: 16px;
                        font-weight: bold;
                        font-family: Bold;
                        color: #FFFFFF;
                    }
                    p{
                        height: 12px;
                        font-size: 12px;
                        font-family: Medium;
                        font-weight: 500;
                        color: #D2D2D2;
                        margin: 20px 0;
                    }
                    .pri{
                        height: 17px;
                        font-size: 12px;
                        font-family: Bold;
                        font-weight: bold;
                        color: #FFFFFF;
                        line-height: 23px;
                        span{
                            font-size: 20px;
                            margin-right: 10px;
                        }
                    }
                }
           }
        }
        .info-btn{
            display: flex;
            margin-top: 14px;
            span{
                width: 169px;
                height: 29px;
                background: #877F94;
                opacity: 0.4;
                border-radius: 3px 2px 2px 2px;
                text-align: center;
                i{
                    display: inline-block;
                    width: 14px;
                    height: 13px;
                    img{
                         width: 100%;
                        height: 100%;
                    }
                }
                em{
                    font-size: 12px;
                    font-family: Medium;
                    font-weight: 500;
                    color: #FFFFFF;
                    margin-left: 5px;
                    line-height: 20px;
                }
            }
            .wantsee{
                margin-right: 9px;
            }
        }
        section{
            background: #f3f3f3;
           .section-top{
               background: #fff;
               margin-bottom: 10px;
                p{
                height: 30px;
                font-size: 12px;
                margin: 10px 0;
                font-family: Medium;
                line-height: 30px;
                padding-left: 14px;
            }
            .van-cell--clickable{ 
                font-family: Medium;
                font-size: 14px;
                font-weight: 500;
                color: #232323;
                line-height: 23px;
            }
            h3{
                width: 100%;
                padding-left: 14px;
                height: 44px;
                font-family: Medium;
                box-sizing: border-box;
                border-bottom: 1px solid #F3F3F3;
                font-size: 14px;
                font-weight: 500;
                line-height: 44px;
                color: #101010;
                position: relative;
                span{
                    margin-right: 20px;
                }
                .van-icon{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 344px;
                    width: 6px;
                    height: 10px;
                    color: #999797;
                    line-height: 14px;
                }
            }
            .van-popup{
                padding: 14px;
                h4{
                    font-family: Bold;
                    font-size: 16px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                }
                .van-icon-passed{
                    color: #FF2662;
                }
                span.cancle{
                    width: 361px;
                    height: 44px;
                    font-size: 14px;
                    font-family: Medium;
                    line-height: 44px;
                    text-align: center;
                    position: fixed;
                    bottom: 0;
                    left: 7px;
                    border-top: 1px solid #ccc;
                }
            }
            .address{
                width: 100%;
                position: relative;
                height: 44px;
                padding-left: 14px;
                box-sizing: border-box;
                font-size: 14px;
                font-weight: 500;
                font-family: Medium;
                border-bottom: 1px solid #F3F3F3;
                .van-icon{
                    width: 13px;
                    height: 18px;
                    color: #e92f62;
                    position: absolute;
                    top: 0;
                    left: 341px;
                }
            }
            .address-box{
                width: 100%;
                 overflow: auto;
                .address-move{
                    height: 95px;
                    padding-left: 14px;
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    .address-item{
                        width: 57px;
                        height: 51px;   
                        border: 1px solid #ECECEC;
                        border-radius: 2px;
                        margin-right: 14px;
                        text-align: center;
                        box-sizing: border-box;
                        padding: 5px;
                        color: #6C6C6C;
                        h4{       
                            font-size: 13px;
                            font-family: Medium;
                            font-weight: 500;
                            line-height: 23px;
                        }
                        p{   
                            font-size: 12px;
                            font-family: Medium;
                            font-weight: 500;
                            line-height: 12px;
                            padding: 0;
                            margin: 0;
                        }
                    }
                    .active{
                        color: #ff245f!important;
                    }
                }    
            }
           }
        
        }
        .van-button{
            border-radius: 0;
            font-size: 14px;
            // font-family: PingFang SC;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 40px;
        }
    }
</style>