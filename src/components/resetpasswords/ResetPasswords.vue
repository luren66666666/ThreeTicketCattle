<template>
    <div class="reset-passwords">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="艳阳高照 组团出门浪"  left-arrow :border="false" @click-left="onClickLeft">
            <template #right>
                <van-icon name="cluster-o" size="18" />
            </template>
        </van-nav-bar>
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
                margin-left: 115px;
            }
            .van-nav-bar__left{
                margin-left: 18px;
            }
            .van-nav-bar__right{
                margin-right: 22px;
            }
        }
    }
</style>