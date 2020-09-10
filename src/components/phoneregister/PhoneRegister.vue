<template>
    <div class="register-center">
        <van-nav-bar
            left-arrow
            @click-right="onClickRight"
            class="navbar"
            />
            <h1 class="size-phone">手机号登录注册</h1>
            <van-cell-group>
            <van-field v-model="value" 
             placeholder="请输入手机号" 
             class="input-phone"/>
            </van-cell-group>
            <hr>
            <van-field
                
                center
                clearable
               class="field-ma"
                placeholder="请输入短信验证码"
                >
                <template #button>
                    <van-button size="small" type="primary">获取验证码</van-button>
                </template>
                </van-field>
                <hr>
                 <van-button type="primary" block class="button-denglu">登录</van-button> 
                <input type="radio" class="input-rad">
                 <span class="xiyi">已阅读并同意注册协议和隐私协议</span><a href="\register" class="mima">密码登录</a>
                 <img src="../../assets/组 2@2x.png" class="img-weixin" alt="">
                 <p class="weixin">微信登录</p>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            value: '',
            onClickRight:''
        }
    },
}
</script>

<style lang="scss">
.register-center{


    .size-phone{
        text-align: center;
        font-size: 22px;       
        color: #000000;
        margin-top: 10px;
    }
    .input-phone{
        margin-top: 20px;
    }
    .field-ma{
        margin-top: 20px;
    }
    .button-denglu{
        font-size: 20px;
        margin-top: 20px;
    }
    .xiyi{
        font-size: 16px;
       
    }
    .mima{
        font-size: 16px;
        margin-left: 50px;
    }
    .input-rad{
        font-size: 16px;

    }
    .img-weixin{
        margin-top: 140px;
        margin-left: 145px;
    }
    .weixin{
        font-size: 16px;
        text-align: center;
    }
   .van-button--primary{
       background: pink;
       
   }
    
}
</style>