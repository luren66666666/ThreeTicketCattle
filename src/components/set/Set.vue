<template>
    <div class="set-container">
        <van-nav-bar
            title="设置"
            left-arrow
            placeholder
            fixed
            @click-left="onClickLeft"
        />
        <section>
            <div class="section-top">
                <van-cell title="绑定手机号" value="131****5587" />
                <van-cell title="修改密码" is-link @click="changePassword"/>
            </div>
            <div class="section-middle">
                <van-cell center title="照片水印">
                    <template #right-icon>
                        <van-switch v-model="checked1" size="24" />
                    </template>
                </van-cell>
                <van-cell center title="视频水印">
                    <template #right-icon>
                        <van-switch v-model="checked2" size="24" />
                    </template>
                </van-cell>
            </div>
            <div class="section-bottom">
                <van-cell title="关于票牛" is-link  />
                <van-cell title="给票牛点赞" is-link  />
                <van-cell title="反馈建议" is-link  />
                <van-cell title="其他" is-link  />
            </div>
        </section>
        <van-button color="#fff"  block>退出登录</van-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked1:true,
            checked2:true
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        },
        changePassword(){
            this.$router.push('/changepassword');
        }
    },
}
</script>
<style lang="scss">
    .set-container{
        background: #f2f2f2;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        .van-nav-bar{
            .van-nav-bar__title{ 
                font-size: 16px;
                font-family: Bold;
                font-weight: bold;
                color: #505050;
            }
            .van-icon-arrow-left{
                color: #505050;
            }
        }
        section{
            .van-cell__title{   
                    font-family: Medium;
                    font-weight: 500;
                    color: #000000;
                }
            .van-cell__value{
                font-family: Medium;
                font-weight: 500;
                color: #7C7C82;
            }
            .section-top{
                margin: 15px 0;
            }
            .section-middle{
                margin: 30px 0;
                font-size: 14px;
                font-family: Medium;
                font-weight: 500;
                color: #000000;
            }
            .section-bottom{
                margin-bottom: 15px;
            }
        }
        .van-button__text{
            font-size: 17px;
            font-weight: 500;
            color: #FF5232;
        }
    }
</style>