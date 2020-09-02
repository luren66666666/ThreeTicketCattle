<template>
    <div class="register-mima">
        <van-nav-bar
            left-arrow
            @click-right="onClickRight"
            class="navbar"
            />
            <h1 class="size-phone">账号密码登录</h1>
             <van-cell-group>
            <van-field v-model="value" 
             placeholder="请输入账号" 
             class="input-phone"/>
            </van-cell-group>
            <hr>
             <van-cell-group>
            <van-field v-model="value" 
             placeholder="请输入密码" 
             class="input-phone"/>
            </van-cell-group>
            <hr>
            <van-button type="primary" block class="button-denglu">登录</van-button>
            <img src="../../assets/组 2@2x.png" class="img-weixin" alt="">
                 <p class="weixin">微信登录</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.register-mima{
    .size-phone{
        text-align: center;
        font-size: 22px;       
        color: #000000;
        margin-top: 10px;
        }       
        .button-denglu{
        font-size: 20px;
        margin-top: 20px;
        }
        .input-phone{
            margin-top: 10px;
        }
        .img-weixin{
        margin-top: 250px;
        margin-left: 145px;
    }
       .weixin{
        font-size: 16px;
        text-align: center;
    }
    }
</style>