<template>
    <div class="showdetails-container">
        <van-nav-bar title="演出详情" left-text="" left-arrow fixed placeholder @click-left="goBack">
            <template #right>
                <van-icon name="cluster-o" size="18" />
            </template>
        </van-nav-bar>
         <div class="section-middle">
                <div class="show-title">演出简介</div>
                <h6 class="show-introduce">演出介绍</h6>
                <div class="one">
                    <p>温馨提示:为响应国家防疫要求，部分剧院实施交叉或隔排售票方式，
                        故在疫情期间，平台将无法保障同- -订单3张及以内保证连座，给您带来的不便敬请原谅</p>
                </div>
                
                <div class="two">
                    <p>“王闪火重要的事莫耽搁，我努力不闪火，集中精力搞说唱像爬山坡”。相对于其他在《中国新说唱》中表现优异，借节目余温迅速发专的rapper</p>
                </div>
                <div class="show-img">
                    <img src="../../assets/票牛-购票_slices/images/show_03.jpg" alt="">
                </div>
                <div class="getmore">展开更多</div>
            </div>
        <IconList />
        <ToBuy :tit="tit" />
    </div>
</template>
<script>
import IconList from '../buyticket/IconList';
import ToBuy from '../buyticket/ToBuy';
export default {
    data() {
        return {
            tit:'这就购票'
        }
    },
    components:{
        IconList,
        ToBuy
    },
    methods: {
        showMoreInfo(){
            this.showmore = !this.showmore;
        },
        goBack(){
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="scss">
    .showdetails-container{
         .van-nav-bar{
            height: 44px;
            background: #fff;
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
            .section-middle{
               background: #fff;
               .show-title{
                    height: 28px;
                    font-size: 14px;
                    font-family: Bold;
                    font-weight: bold;
                    color: #333333;
                    line-height: 28px;
                    box-sizing: border-box;
                    padding: 14px 0 14px 14px; 
               }
               .show-introduce{  
                    height: 12px;
                    font-size: 12px;
                    text-align: center;
                    margin: 15px 0;
                    font-family: Bold;
                    font-weight: bold;
                    color: #3C4460;
                    line-height: 12px;
               }
               p{
                   box-sizing: border-box;
                   padding: 0;
                    font-size: 12px;
                    box-sizing: border-box;
                    padding: 0 14px;
                    font-family: Medium;
                    font-weight: 500;
                    color: #666666;
                    line-height: 17px;
               }
               .one{
                    margin-bottom: 26px;
                }
                .two{
                    box-sizing: border-box;
                    padding-bottom: 20px;
                }
                .show-img{
                    width: 349px;
                    height: 211px;
                    margin-left: 14px;
                    margin-bottom: 20px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .getmore{
                    height: 40px;
                    font-size: 14px;
                    font-family: Medium;
                    font-weight: 500;
                    color: #E73A68;
                    line-height: 40px;
                    text-align: center;
                    &:after{
                        content: '';
                        display: inline-block;
                        width: 0;
                        height: 0;
                        border: .05rem #E73A68 solid;
                        border-color: #E73A68 transparent transparent transparent;
                        border-width:  7px 8px 0;
                        vertical-align: middle;
                        margin-left: 5px;
                    }
                }
           }
        
       
    }
</style>