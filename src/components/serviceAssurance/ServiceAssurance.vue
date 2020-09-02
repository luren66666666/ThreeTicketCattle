<!--
 * @Author: your name
 * @Date: 2020-09-02 10:33:49
 * @LastEditTime: 2020-09-02 21:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \票牛\ThreeTicketCattle\src\components\serviceAssurance\ServiceAssurance.vue
-->
<template>
    <div class="service-assurance container">
        <van-nav-bar fixed placeholder 
            title="票牛服务保障"
            left-arrow
            @click-left="onClickLeft"
            />
        <img class="img1" :src="img" alt="">
        <h2>无票赔付</h2>
        <p>
            在票牛购买门票，如果因为卖家原因无法获得指定票品(因主办或不可抗，力的因素导致演出取消除外)，除全额退款外，可获得额外赔付，相关规则须详见确定订单页面的无票赔付处。                
        </p>
        <p>
            注:票牛官方-"现场取超低价"服务订单，不享受无票赔付            
        </p>
        <h2>出票保真</h2>
        <img class="img2" :src="img1" alt="">
        <p>
            票牛对所有票品进行真票承诺，如果发现票牛所售票品为假票，一经核实将按订单支付价的300%进行赔偿        
        </p>
        <h2>配送保障</h2>
        <img class="img2" :src="img2" alt="">
        <p>
            多种配送方式:现场自取、电子票、快递寄送。                    
        </p>
        <p>
            顺丰快递同城次日达达       
        </p>
        <h2>15分钟内无条件退款</h2>
        <img class="img2" :src="img3" alt="">
        <p>
            下单后15分钟内，可以无条件取消订单，按订单支付价全额退款 下单时选择‘‘现场取票”订单及特殊演出项目除外       
        </p>
        <h2>服务流程</h2>
        <img :src="img4" class="img3" alt="">
        <h2>我们的目标</h2>
        <p>
            我们是一家热爱生活并热爱现场娱乐的公司，希望让更多人感受现场，享受快乐。我们对接了各大票务平台、主办方、票务代理和场馆资源，为用户提供各类演出票品，同时也为热爱演出的用户提供优质演出信息内容和交流平台。我们希望通过技术手段来打造对消费者负责、保障消费者权益的购票平台，鼓励好卖家、淘汰不靠谱卖家，确保每- -个热爱演出的观众买得到票，买得放心、买得实惠
        </p>
        <h2>
            公司背景
        </h2>
        <p>
            票牛成立于2015年，因向用户提供了放心靠谱的购票体验而受到演出观众群体的信赖，取得了高速成长2018年，凭借对用户提供优质的服务而得到行业和投资人认可，获得了由SIG海纳亚洲、红杉资本、GGV、 头头是道、硅谷银行、点亮基金、穗彩科技等机构以及大众点评创始人张涛、华尔街金融家黄奇辅等个人领头的B轮融资
        </p>
    </div>
</template>
<script>
import img from '../../assets/img/图层 14.png'
import img1 from '../../assets/img/批注 2020-09-02 203028.png'
import img2 from '../../assets/img/图层 2.png'
import img3 from '../../assets/img/图层 3.png'
import img4 from '../../assets/img/批注 2020-09-02 210058.png'
export default {
    data() {
        return {
            img:img,
            img1:img1,
            img2:img2,
            img3:img3,
            img4:img4
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
  }
}
</script>
<style lang="scss">
@import '@/assets/sass/reset.scss';
.service-assurance{
    .van-nav-bar .van-icon{
        color: #000;
    }
    .van-nav-bar__title{
        font-weight: bold;    
        color: #494C4C;
    }
    .img1{
        width: 100%;
        height: 142px;
    }
    h2{
        height: 16px;
        text-align: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #4F5050;
        line-height: 19px;
        margin: 20px 0;
        position: relative;
        &::after{
            content: '';
            display: block;
            width: 55px;
            height: 2px;
            background: #E3577D;
            border-radius: 1px;
            position: absolute;
            left: 5px;
            top: 24px;
        }
        &:nth-of-type(4)::after{
            left: 45px;
        }
        &:nth-of-type(6)::after{
            left: 14px;
        }
    }
    p{
        width: 346px;
        font-size: 11px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #434F51;
        line-height: 19px;
        text-align: justify;
    }
    // p:nth-of-type(1){
    //     height: 49.5px;
    // }
    p:nth-of-type(2){
        color: #E8342B;
        margin-bottom: 20px;
    }
    .img2{
        width: 359px;
        height: 110px;
    }
    p:nth-of-type(3),p:nth-of-type(6){
        width: 322px;
        height: 28px;
        color: #434E50;
        line-height: 18px;
        margin: 20px 0;
    }
    p:nth-of-type(4){
        width: 322px;
        color: #434E50;
        line-height: 18px;
        margin-top: 20px;
    }
    p:nth-of-type(5){
        width: 322px;
        color: #E8342B;
        margin-bottom: 20px;
    }
    .img3{
        width: 351px;
    }
    p:nth-of-type(7),p:nth-of-type(8){
        width: 319px;
    }
}
</style>