<template>
    <div class="reset-passwords">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="重置密码"  left-arrow :border="false" @click-left="onClickLeft">
        </van-nav-bar>


        <div class="change-passwords-color">
            <div class="text-from">
                <span class="tel">新密码</span><input type="password" class="input-tel">
                <div class="xian"></div>
                <span class="code">再次输入密码</span><input type="password" class="input-code">
            </div>
            <div class="next">
                <span>提交</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="scss">
    .reset-passwords{
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .van-nav-bar{
            width: 100%;
            height: 33px;
            background-color: #FBFBFB;
            .van-icon{
                font-size: 20px;
                color: black;
            }
            .van-nav-bar__title{
                color: #515151;
                font-size: 14px;
                font-family: Medium;
                margin-left: 156px;
            }
            .van-nav-bar__left{
                margin-left: 18px;
            }
        }
        .change-passwords-color{
            position: fixed;
            left: 0;
            top: 33px;
            right: 0;
            bottom: 0;
            background-color: #F1F1F1;
            .text-from{
                width: 100%;
                height: 79px;
                background-color: #FFFFFF;
                position: absolute;
                left: 0px;
                top: 18px;
                .tel{
                    color: #000000;
                    font-size: 12px;
                    font-family: Regular;
                    position: absolute;
                    left: 15px;
                    top: 14px;
                }
                .input-tel{
                    color: #000000;
                    font-size: 12px;
                    font-family: Regular;
                    border: none;
                    position: absolute;
                    left: 65px;
                    top: 14px;
                }
                .xian{
                    width: 358px;
                    height: 1px;
                    position: absolute;
                    left: 17px;
                    top: 38px;
                    background-color: #D1D1D3;
                }
                .code{
                    color: #000000;
                    font-size: 12px;
                    font-family: Regular;
                    position: absolute;
                    left: 14px;
                    top: 53px;
                }
                .input-code{
                    color: #000000;
                    font-size: 12px;
                    font-family: Regular;
                    border: none;
                    position: absolute;
                    left: 97px;
                    top: 53px;
                }

            }
            .next{
                width: 348px;
                height: 44px;
                background-color: #ff2661;
                position: absolute;
                left: 12px;
                top: 116px;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    color: #FFFFFF;
                    font-size: 16px;
                    font-family: Regular;
                }
            }
        }
    }
</style>