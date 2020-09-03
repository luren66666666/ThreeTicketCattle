<template>
    <div class="recommend-recommend">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="艳阳高照 组团出门浪"  left-arrow :border="false">
            <template #right>
                <van-icon name="cluster-o" size="18" />
            </template>
        </van-nav-bar>

        <!-- 列表选项 -->
        <div class="ulboxes">
            <ul>
                <li v-for="(value,index) in listArr" :key="index">{{value}}</li>
            </ul>
        </div>
        
        <!-- 版型 -->
        <div class="boxesmodel">
            <!-- 释放压力 +图片-->
            <div class="imgboxesmodel">
                <img src="../../assets/images/票牛-推荐/tu1@3x.png" alt="">
                <span class="span1">释放压力</span>
                <span class="span2">热展一网打尽</span>
            </div>

            <!-- 两个列表 -->
            <div class="boxesli" v-for="(value,index) in 2" :key="index">
                <p>EPSON teamLab无界美啊手动阀</p>
                <span class="span1">2020.03.06-08.31</span>
                <span class="span2">TeamLab Borderl ess 上海 无界美术馆</span>
                <img src="../../assets/images/票牛-推荐/图层 3.png" alt="">
                <div class="price">
                    <div class="priceRed">239</div>
                    <span class="spanPrice">元起</span>
                </div>
                <div class="title">
                    <div class="titleText">必打卡的展</div>
                </div>
                <span class="span3">必打卡的展</span>
            </div>

            <!-- 释放压力 +图片-->
            <div class="imgboxesmodel2">
                <img src="../../assets/images/票牛-推荐/tu1@2x(1).png" alt="">
                <span class="span1">释放压力</span>
                <span class="span2">热展一网打尽</span>
            </div>

            <!-- 上海迪士尼 -->
            <div class="Shanghai-Disneyland-Park">
                <img src="../../assets/images/票牛-推荐/图层 6.png" alt="">
                <span class="span1">上海迪士尼乐园门票</span>
                <span class="span2">2019.06.17-2020.08.31</span>
                <span class="span3">上海迪士尼乐园</span>
                <span class="span4"><span class="span5">69</span>元起</span>
            </div>

            <!-- 上海野生动物园列表 -->
            <div class="Shanghai-Zoo-List" v-for="(value) in ZooArr" :key="value.id">
                <img :src="value.img" alt="">
                <span class="span1">{{value.title}}</span>
                <span class="span2">{{value.time}}</span>
                <span class="span3">{{value.title}}</span>
                <span class="span4"><span class="span5">{{value.price}}</span>元起</span>
            </div>
        </div>

        
    </div>
</template>
<script>
import ZooImg1 from '../../assets/images/票牛-推荐/组 3.png'
import ZooImg2 from '../../assets/images/票牛-推荐/组 4.png'
import ZooImg3 from '../../assets/images/票牛-推荐/组 4(1).png'
export default {
    data(){
        return {
            listArr:['爆款推荐','春末初夏','释放压力','爱宠同游'],
            ZooArr:[{
                img:ZooImg1,
                title:'上海野生动物园',
                time:'2019.06.17-2020.08.31',
                price:69,
                id:'111111'
            },
            {
                img:ZooImg2,
                title:'上海野生动物园',
                time:'2019.09.03-2020.3.11',
                price:49,
                id:'222222'
            },
            {
                img:ZooImg3,
                title:'上海海昌海洋公园',
                time:'2019.02.15-2019.09.15',
                price:49,
                id:'333333'
            },],
        }
    }
}
</script>
<style lang="scss">
@import '@/assets/style/reset.scss';
.recommend-recommend{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #efa383;
    padding-bottom: 19px;
    .van-nav-bar{
        width: 100%;
        background-color: #efa383;
        height: 36px;
        .van-icon{
            color: black;
        }
        .van-nav-bar__title{
            font-size: 16px;
            font-family: Bold;
        }
    }
    .ulboxes{
        width: 100%;
        height: 44px;
        background-color: #b74521;
        ul{
            margin-left: 23px;
            width: 329px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            li{
                font-size: 16px;
                font-family: Bold;
                color: #FFFFFF;
            }
        }
    }
    .boxesmodel{
        width: 344px;
        // background-color: white;
        // height: 500px;
        .imgboxesmodel{
            margin-top: 42px;
            width: 100%;
            height: 70px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            span{
                position: absolute;
            }
            .span1{
                left: 13px;
                top: 16px;
                font-size: 21px;
                color: #FFFFFF;
                font-family: Bold;
            }
            .span2{
                left: 15px;
                top: 43px;
                color: #FFFFFF;
                font-size: 12px;
                font-family: Medium;
            }
        }
        .boxesli{
        width: 344px;
        height: 211px;
        margin-top: 8px;
        background-color: white;
        position: relative;
            p{
                width: 186px;
                height: 20px;
                font-size: 16px;
                color: #1F2020;
                font-family: Bold;
                position: absolute;
                left: 18px;
                top: 20px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .span1{
                font-size: 16px;
                color: #9F9E9E;
                font-family: Medium;
                position: absolute;
                left: 17px;
                top: 47px;
            }
            .span2{
                font-size: 12px;
                color: #9F9E9E;
                font-family: Medium;
                position: absolute;
                left: 16px;
                top: 64px;
            }
            img{
                width: 78px;
                height: 103px;
                position: absolute;
                left: 251px;
                top: 13px;
            }
            .price{
                width: 58px;
                height: 14px;
                position: absolute;
                left: 18px;
                top: 93px;                
                .priceRed{
                    display: inline-block;
                    width: 35px;
                    font-size: 18px;
                    color: #E7305E;
                    font-family: Bold;
                }
                .spanPrice{
                    position: absolute;
                    right: 0;
                    bottom: -11px;
                    font-size: 10px;
                    color: #9F9E9E;
                    font-family: Medium;
                }
            }
            .title{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 9px 7px;
                position: absolute;
                left: 17px;
                top: 131px;
                background-color: #FAF3E4;
                .titleText{
                    font-size: 13px;
                    color: #A77423;
                    font-family: Bold;
                }
            }
            .span3{
                font-size: 12px;
                color: #302D2D;
                font-family: Medium;
                position: absolute;
                left: 16px;
                top: 174px;
            }
        }
        .imgboxesmodel2{
            margin-top: 7px;
            width: 100%;
            height: 70px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            span{
                position: absolute;
            }
            .span1{
                left: 13px;
                top: 16px;
                font-size: 21px;
                color: #FFFFFF;
                font-family: Bold;
            }
            .span2{
                left: 15px;
                top: 43px;
                color: #FFFFFF;
                font-size: 12px;
                font-family: Medium;
            }
        }
        .Shanghai-Disneyland-Park{
            margin-top: 8px;
            width: 100%;
            height: 312px;
            background-color: white;
            position: relative;
            img{
                width: 328px;
                height: 187px;
                position: absolute;
                left: 8px;
                top: 11px;
            }
            .span1{
                position: absolute;
                left: 18px;
                top: 221px;
                color: #18191A;
                font-size: 16px;
                font-family: Bold;
            }
            .span2{
                position: absolute;
                left: 18px;
                top: 247px;
                color: #8E8F90;
                font-size: 12px;
                font-family: Medium;
            }
            .span3{
                position: absolute;
                left: 18px;
                top: 262px;
                color: #8E8F90;
                font-size: 12px;
                font-family: Medium;
            }
            .span4{
                position: absolute;
                left: 19px;
                top: 281px;
                color: #8E8F90;
                font-size: 10px;
                font-family: Medium;
                .span5{
                    margin-right: 7px;
                    color: #E7305E;
                    font-size: 18px;
                    font-family: Bold;
                }
            }
        }
        .Shanghai-Zoo-List{
            position: relative;
            margin-top: 10px;
            width: 100%;
            height: 124px;
            background-color: white;
            img{
                width: 78px;
                height: 103px;
                position: absolute;
                left: 251px;
                top: 11px;
            }
            .span1{
                position: absolute;
                left: 18px;
                top: 20px;
                color: #202121;
                font-size: 16px;
                font-family: Bold;
            }
            .span2{
                position: absolute;
                left: 17px;
                top: 47px;
                color: #9F9E9E;
                font-size: 12px;
                font-family: Medium;
            }
            .span3{
                position: absolute;
                left: 17px;
                top: 64px;
                color: #9F9E9E;
                font-size: 12px;
                font-family: Medium;
            }
            .span4{
                position: absolute;
                left: 18px;
                top: 93px;
                color: #8B8C8D;
                font-size: 10px;
                font-family: Medium;
                .span5{
                    margin-right: 7px;
                    color: #E7305E;
                    font-size: 18px;
                    font-family: Bold;
                }
            }
        }
    }
    
}
</style>