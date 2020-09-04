<!--
 * @Author: your name
 * @Date: 2020-09-03 17:07:33
 * @LastEditTime: 2020-09-04 11:26:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \票牛\ThreeTicketCattle\src\components\freeprizedraw\FreePrizeDraw.vue
-->
<template>
    <div class="free-prize-draw container">
        <van-nav-bar title="活动登记" left-arrow @click-left="onClickLeft" fixed placeholder>
            <template #right>
                <van-icon name="cluster-o" size="18" />
            </template>
        </van-nav-bar>
        <img class="img1" :src="img" alt="">
        <div class="baoming">
            <h2>【活动报名】票牛集市丨620与您见面</h2>
            <p class="p1">活动时间</p>
            <p class="p2 pp">2020.06.20</p>
            <p class="p1">活动地点</p>
            <p class="p2 pp">
                淮海中路1028新元素餐厅
                <van-icon name="arrow" />
            </p>
            <p class="p1">
                活动名额：
                <i>50</i>
                人
            </p>
            <p class="p2">
                已有10人报名
                <van-icon name="arrow" />
            </p>
        </div>
        <h3>报名流程</h3>
        <img :src="img1" alt="" class="img2">
        <p class="p4">
            限购说明:每单限购6张<br>
            座位类型:现场不设座位,均为站席观演<br>
            儿童入场提示: 1.2米以上凭票入场，1.2米以下谢绝入场<br>
            禁止携带物品:食品、饮料、相机、充电宝、打火机等<br>
            其他说明: *活动开奖时间: 2020年6 月19日16:00<br>
            *现场活动时间: 2020年6月20日19:00 (夜市 具体以现场安排为准)<br>
            *奖品信息:<br>
            *奖品领取方式:新天地湖滨路集市广场-找到现场集市票牛工作人员领取<br>
            电子票:本项目支持凭电子票入场。<br>
            -现场扫码验票或凭姓名手机号入场(以现场为准) ;扫码验票流程:打<br>
            开票牛APP-→订单详情-→票券详情-→现场扫码入场。<br>
            用券限制:该演出不可使用优惠券。<br>
        </p>
        <h3>相关演出</h3>
        <div class="yanchu">
            <img :src="img" alt="" class="img3">
            <div>
                <h4>【活动报名】票牛集市丨620与您见面</h4>
                <p>
                    2020.06.20<br>
                    淮海中路1028号新元素餐厅
                </p>
            </div>
        </div>
        <h3>活动介绍</h3>
        <h5>票牛见面会 | 线下集合</h5>
        <p class="p5">票牛首次线下集市，将由美丽的小姐姐小哥哥现场等待您的大驾，奖品将足量准备，名额有限!快点击报名吧~</p>
        <p class="p6">
            *活动开奖时间: 2020年6月19日16:00<br>
            *活动体验时间: 2020年6 月20日19:00 (具体时间由现场集市<br>
            官方安排)<br>
            *奖品信息:精美定制周边礼品; 50位名额，每位用户限领一<br>
            份。<br>
            *奖品领取方式:新天地湖滨路集市广场-找到现场集市票牛工<br>
            作人员领取
        </p>
        <p class="p7">
            活动规则:<br>
            1、通知&确认:以APP推送、短信形式发送给中奖用户的通
            知，请您在规定时间内确认，超时未确认将视为自动放弃;
            (若确认后临时有变动，请在活动开始前24小时内联系客服同
            学或者群管理员，否则算无故缺席。)<br>
            2、作业:参加活动或体验结束后，记得及时在本次活动相关
            演出页面提交体验评论哦，要求50字以上+3张图/1条视频;<br>
            3. 我们将视一次开奖的确认情况。 会有机会进行一次开奖，
            报名参加<br>
            4、活动期间相同用户ID仅有1次参与机会;<br>
            5、如因不可抗因素导致演出或活动取消，将取消本次活动,
            不予补偿，不影响参与用户在其他活动的中奖率;<br>
            6、活动体验中，如遇到问题需客服介入解决，请联系票牛客
            服。
        </p>
        <img :src="img2" alt="" class="img4">
        <p class="p8">
            *活动地址:.上海市黄埔区新天地湖滨路<br>
            现场活动，限量福利:<br>
            1:超值权益包<br>
            2:定制化明星周边<br>
            3:大转盘
        </p>
        <img :src="img3" alt="" class="img5">
        <div class="join-wrap">
            <div class="join">
                报名参加
            </div>
        </div>
    </div>
</template>
<script>
import img from '../../assets/img/组 2.png'
import img1 from '../../assets/img/批注 2020-09-03 205015.png'
import img2 from '../../assets/img/图层 5.png'
import img3 from '../../assets/img/图层 6.png'

export default {
    data() {
        return {
            img:img,
            img1:img1,
            img2:img2,
            img3:img3
        }
    },
    methods: {
        onClickLeft() {
        this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/reset.scss';
.free-prize-draw{
    .img1{
        width: 100%;
        height: 186px;
    }
    .baoming{
        width: 290px;
        height: 208px;
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 7px;
        box-shadow: 1px 1px 3px 1px rgba(0,0,0,.1);
        position: relative;
        top: -10px;
        padding: 18px 28px;
        h2{
            width: 291px;
            height: 35px;
            font-size: 17px;
            font-weight: bold;
            color: #515151;
            text-align: justify;
        }
        .p1{
            height: 25px;
            line-height: 25px;
            font-size: 12px;
            font-weight: bold;
            color: #545454;
            i{
                color: #FF5231;
            }
        }
        .p2{
            height: 35px;
            line-height: 35px;
            font-size: 14px;
            font-weight: bold;
            color: #545454;
            position: relative;
            .van-icon-arrow{
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
        .pp{
            border-bottom: 1px solid #F2F2F2;
        }
    }
    h3{
        width: 320px;
        font-size: 16px;
        font-weight: bold;
        color: #3C3C3C;
        line-height: 18px;
        margin: 28px 0 13px 0;
        &::before{
            content: '';
            display: inline-block;
            width: 5px;
            height: 17px;
            background: #FFD85B;
            position: relative;
            left: -5px;
            top: 2px;
        }
    }
    .img2{
        width: 100%;
        height: 50px;
    }
    .p4{
        width: 338px;
        height: 211px;
        font-size: 10px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #484848;
        line-height: 18px;
    }
    .yanchu{
        width: 333px;
        height: 79px;
        padding: 8px;
        display: flex;
        justify-content: space-between;
        img{
            width: 61px;
            height: 81px;
        }
        div{
            width: 255px;
            h4{
                font-size: 13px;
                font-weight: bold;
                color: #242424;
                line-height: 18px;
            }
            p{
                font-size: 12px;
                font-weight: bold;
                color: #9B9B9B;
                line-height: 18px;
                transform: translateY(30px);
            }
        }
    }
    h5{
        height: 22px;
        font-size: 13px;
        font-weight: bold;
        color: #757575;
        line-height: 18px;
    }
    .p5{
        width: 348px;
        height: 31px;
        font-size: 13px;
        font-weight: bold;
        color: #656565;
        line-height: 18px;
        text-align: center;
        margin-bottom: 17px;
    }
    .p6{
        width: 349px;
        height: 141px;
        font-size: 13px;
        font-weight: bold;
        color: #000000;
        line-height: 18px;
    }
    .p7{
        width: 349px;
        height: 272px;
        font-size: 13px;
        font-weight: bold;
        color: #717171;
        line-height: 20px;
        text-align: justify;
        margin-bottom: 32px;
    }
    .img4{
        width: 348px;
        height: 229px;
        margin-bottom: 25px;
    }
    .p8{
        width: 348px;
        height: 92px;
        font-size: 13px;
        font-weight: bold;
        color: #717171;
        line-height: 20px;
        margin-bottom: 41px;
    }
    .img5{
        width: 347px;
        height: 240px;
        margin-bottom: 30px;
    }
    .join-wrap{
        width: 100%;
        height: 84px;
        border-top: 1px solid #717171;
        .join{
            width: 100%;
            height: 44px;
            line-height: 44px;
            background: #FFD859;
            text-align: center;
            font-size: 15px;
            font-weight: bold;
            margin-top: 30px;
        }
    }
}
</style>