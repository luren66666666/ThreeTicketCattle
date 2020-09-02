<template>
    <div class="iconlist-container">
        <div class="section-bottom">
                <h3><span>所有评论(10)</span> <van-icon name="arrow" /></h3>
                <van-divider>票牛服务保障</van-divider>
                <div class="icon-list">
                    <div class="icon-items" v-for="(item,index) in iconListArr" :key="index">
                        <img :src="item.pic" alt="">
                        <p>{{item.title}}</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import Picture1 from "../../assets/票牛-购票_slices/图层 4.png";
import Picture2 from "../../assets/票牛-购票_slices/图层 3.png"; 
import Picture3 from "../../assets/票牛-购票_slices/图层 2.png";
export default {
    data() {
        return {
             iconListArr:[
                {
                    title:'无票赔付',
                    pic:Picture1
                },
                {
                    title:'出票保真',
                    pic:Picture2
                },
                {
                    title:'配送保障',
                    pic:Picture3
                }
            ]
        }
    },
}
</script>

<style lang="scss">
    .iconlist-container{
        .section-bottom{
               margin-top: 10px;
               background: #fff;
                h3{
                    width: 100%;
                    padding-left: 14px;
                    height: 44px;
                    box-sizing: border-box;
                    font-size: 14px;
                    font-weight: 500;
                    font-family: Bold;
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
                .van-divider{  
                    width: 195px;
                    height: 65px;
                    font-size: 14px;
                    font-family: Bold;
                    font-weight: bold;
                    color: #999999;
                    line-height: 17px;
                    margin-left: 80px;
                }
                .icon-list{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 56px;
                    .icon-items{
                        width: 52px;
                        height: 50px;
                        margin: 0 38px;
                        text-align: center;
                        img{
                            width: 27px;
                            height: 27px;
                            margin-left: 15px;
                            margin-bottom: 10px;
                        }
                        p{   
                            font-size: 12px;
                            font-family: Medium;
                            font-weight: 500;
                            color: #8D8E8F;
                            line-height: 12px;
                        }
                    }
                    
                }
           }
    }
    
</style>