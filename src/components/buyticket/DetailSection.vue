<template>
    <div class="detail-section">
        <div class="section-middle">
                <div class="show-title">演出简介</div>
                <h6 class="show-introduce">演出介绍</h6>
                <div class="one">
                    <p v-for="(item,index) in oneInfo" :key="index">{{item}}</p>
                </div>
                
                <div class="two">
                    <p v-for="(item,index) in twoInfo" :key="index">{{item}}</p>
                </div>
                <div class="show-img" v-if="!showmore">
                    <img src="../../assets/票牛-购票_slices/图层 1.png" alt="">
                </div>
                <div class="show-img show-img2" v-if="showmore">
                    <img src="../../assets/票牛-购票_slices/图片 拷贝.png" alt="">
                </div>
                <div class="getmore" @click="showMoreInfo" v-if="!showmore">展开更多</div>
                <div class="two" v-if="showmore">
                    <p v-for="(item,index) in twoInfo" :key="index">{{item}}</p>
                </div>
            </div>
            <IconList />
    </div>
</template>

<script>
import IconList from './IconList';
export default {
    data() {
        return {
            oneInfo:['猝不及防的2020，是不是已经让你憋了太久?',
                '期待撒欢的小心思，是不是已经蠢蠢欲动?',
                '别着急，久违的嗨唱现场，又双聂發要来了!'
            ],
            twoInfo:[
                '中国五大音乐节之一一氧气音 乐节即将线下奔现!',
                '8.22磐安氧气山水音乐节',
                '-个盛夏周末，-次山水旅行,- -场音乐狂欢'
            ],
            showmore:false,
           
        }
    },
     methods: {
        showMoreInfo(){
            this.showmore = !this.showmore;
        }
    },
    components:{
        IconList
    }
}
</script>

<style lang="scss">
    .detail-section{
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
                   text-align: center;
                    font-size: 12px;
                    font-family: Medium;
                    font-weight: 500;
                    color: #666666;
                    line-height: 17px;
               }
               .one{
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
                    margin-bottom: 20px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .show-img2{
                    height: 348px;
                    border-radius: 5px;
                    overflow: hidden;
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