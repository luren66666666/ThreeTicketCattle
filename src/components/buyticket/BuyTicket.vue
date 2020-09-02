<template>
    <div class="buyticket-container">
        <div class="background-img">
           
        </div>
        <van-nav-bar title="" left-text="" left-arrow>
            <template #right>
                <van-icon name="search" size="18" />
            </template>
        </van-nav-bar>
        <div class="details-info">
            <div class="info-content">
                <div class="imgbox">
                    <img src="../../assets/票牛-购票_slices/图片 拷贝.png" alt="">
                </div>
                <div class="show-info">
                    <div class="title">「痛仰/霍尊」中国·磐安2020氧 气山水音乐节</div>
                    <p>暂无评分</p>
                    <div class="pri"><span>408</span>元起</div>
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
                <h3><span>购票须知</span> <van-icon name="arrow" /></h3>
                <h3><span>平台保障</span><span>无票赔付</span><span>出票保真</span><span>配送保障</span><van-icon name="arrow" /></h3>
                <div class="address-box">
                    <div class="address-move">
                        <div class="address-item ">
                            <h4 class="active">张家口</h4>
                            <p class="active">8.15</p>
                        </div>
                        <div class="address-item">
                            <h4>张家口</h4>
                            <p>8.15</p>
                        </div>
                        <div class="address-item">
                            <h4>张家口</h4>
                            <p>8.15</p>
                        </div>
                        <div class="address-item">
                            <h4>张家口</h4>
                            <p>8.15</p>
                        </div>
                        <div class="address-item">
                            <h4>张家口</h4>
                            <p>8.15</p>
                        </div>
                        <div class="address-item">
                            <h4>张家口</h4>
                            <p>8.15</p>
                        </div>
                        <div class="address-item">
                            <h4>张家口</h4>
                            <p>8.15</p>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="section-bottom">
                <div class="show-title">演出简介</div>
                <h6 class="show-introduce">演出介绍</h6>
                <p class="one">猝不及防的2020，是不是已经让你憋了太久?
                     期待撒欢的小心思，是不是已经蠢蠢欲动 ?      
                    别着急，久违的嗨唱现场，又双聂發要来了!</p>
                
                <div class="two">
                    <p>中国五大音乐节之一一氧气音 乐节即将线下奔现!  </p>
                    <p> 8.22磐安氧气山水音乐节</p>
                    <p>-个盛夏周末，-次山水旅行,- -场音乐狂欢</p>
                    <p></p>
                </div>
                <div class="show-img">
                    <img src="../../assets/票牛-购票_slices/图层 1.png" alt="">
                </div>
            </div>
            
        </section>
    </div>
</template>
<script>
export default {
    
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
            background: transparent;
            .van-icon-arrow-left{
                width: 12px;
                height: 19px;
                color: #000;
            }
            .van-nav-bar__title{
                font-size: 15px;
            }
            .van-icon-search{
                width: 15px;
                height: 16px;
                color: #000000;
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
                        color: #FFFFFF;
                    }
                    p{
                        height: 12px;
                        font-size: 12px;
                        font-weight: 500;
                        color: #D2D2D2;
                        margin: 20px 0;
                    }
                    .pri{
                        height: 17px;
                        font-size: 12px;
                        font-family: PingFang SC;
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
                    font-family: PingFang SC;
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
                p{
                height: 30px;
                font-size: 12px;
                margin: 10px 0;
                line-height: 30px;
                padding-left: 14px;
            }
            .van-cell--clickable{ 
                font-size: 14px;
                font-weight: 500;
                color: #232323;
                line-height: 23px;
            }
            h3{
                width: 100%;
                padding-left: 14px;
                height: 44px;
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
            .address{
                width: 100%;
                position: relative;
                height: 44px;
                padding-left: 14px;
                box-sizing: border-box;
                font-size: 14px;
                font-weight: 500;
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
                    justify-content: start;
                    align-items: center;
                    .address-item{
                        width: 57px;
                        height: 51px;   
                        border: 1px solid #ECECEC;
                        border-radius: 2px;
                        margin-right: 14px;
                        text-align: center;
                        padding: 10px;
                        h4{       
                            font-size: 13px;
                            // font-family: PingFang SC;
                            font-weight: 500;
                            color: #6C6C6C;
                            line-height: 23px;
                        }
                        p{   
                            font-size: 12px;
                            // font-family: PingFang SC;
                            font-weight: 500;
                            color: #969696;
                            line-height: 12px;
                            padding: 0;
                        }
                    }
                    .active{
                        color: #ff245f!important;
                    }
                }
               
                
            }
           }
           .section-bottom{
               background: #fff;
               margin-top: 9px;
               .show-title{
                    height: 28px;
                    font-size: 14px;
                    // font-family: PingFang SC;
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
                    // font-family: PingFang SC;
                    font-weight: bold;
                    color: #3C4460;
                    line-height: 12px;
               }
               p{
                   text-align: center;
                    font-size: 12px;
                    // font-family: PingFang SC;
                    font-weight: 500;
                    color: #666666;
                    line-height: 17px;
               }
               .one{
                    margin-left: 69px;
                    width: 239px;
                    height: 46px;
                    margin-bottom: 46px;
                }
                .two{
                    box-sizing: border-box;
                    padding-bottom: 20px;
                }
                .show-img{
                    width: 349px;
                    height: 211px;
                    margin-left: 14px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
           }
           
        }
    }
</style>