<template>
  <div class="payorder-zifu">
    <van-nav-bar title="立即购票" left-text="返回" left-arrow>
      <template #right>
        <img src="../../assets/images/票牛-立即购票/圆角矩形 1.png" alt />
      </template>
    </van-nav-bar>
    <van-notice-bar color="#EE7015" background="#FFF8E5" class="noticebar">
      <span class="noticebar-sixe">
        支付剩余时间:
        <b class="noticeba-miao">14分57秒</b>
      </span>
    </van-notice-bar>
    <div class="noticeba-xinxi">
        <p>订单号:14441604</p>
        <p>商品名称:【杭州站】 夏日入侵企画 [想去海边]</p>
        <p>支付金额:251元</p>
    </div>
    <div class="noticeba-zhifu">
<img src="../../assets/支付订单_slices/96183333014238756 拷贝.png" alt=""><span class="noticeba-logo">支付宝客户端支付</span>
<van-radio-group v-model="radio" class="noticeba-radio">
  <van-radio name="1"></van-radio>
</van-radio-group>
    </div>
    <div class="noticeba-zhifu">
<img src="../../assets/支付订单_slices/96183333014238756 拷贝 2.png" alt=""><span class="noticeba-logo">微信客户端支付</span>
<van-radio-group v-model="radio" class="noticeba-radio1">
  <van-radio name="0"></van-radio>
</van-radio-group>
    </div>
    <div class="noticeba-zhifu">
<img src="../../assets/支付订单_slices/96183333014238756 拷贝 4.png" alt=""><span class="noticeba-logo">乐卡分期</span>
<van-radio-group v-model="radio" class="noticeba-radio2">
  <van-radio name="0"></van-radio>
</van-radio-group>
    </div>
    <div class="noticeba-zhifu">
<img src="../../assets/支付订单_slices/96183333014238756 拷贝 3.png" alt=""><span class="noticeba-logo">花呗分期支付</span>
<van-radio-group v-model="radio" class="noticeba-radio3">
  <van-radio name="0"></van-radio>
</van-radio-group>
    </div>
    <div class="noticeba-zhifu">
<img src="../../assets/支付订单_slices/96183333014238756 拷贝 5.png" alt=""><span class="noticeba-logo">农银快e付</span>
<van-radio-group v-model="radio" class="noticeba-radio4">
  <van-radio name=""></van-radio>
</van-radio-group>
    </div>
    <van-button type="primary" block class="noticeba-button">确认支付</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        radio:'',
    };
  }
};
</script>
<style lang="scss">
.payorder-zifu {
  .noticebar {
    font-size: 18px;
  }
  .noticebar-sixe {
    margin-left: 60px;
  }
  .noticeba-miao {
    font-size: 20px;
  }
  .noticeba-xinxi{
      width: 100%;
      height: 110px;
    //   border: 1px solid #000;
      font-size: 14px;
  }
  .noticeba-zhifu{
      height: 40px;
      width: 100%;
      display: flex;
  }
  .noticeba-logo{
      font-size: 16px;
   justify-items: center;
   margin-top: 5px;
   margin-left: 10px;
  }
  .noticeba-radio{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 150px;
  }
  .noticeba-radio1{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 165px;
  }
  .noticeba-radio2{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 213px;
  }
  .noticeba-radio3{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 181px;
  }
  .noticeba-radio4{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 205px;
  }
  .noticeba-button{
      margin-top: 180px;
  }
}

</style>