<template>
    <div class="no-yuan-for-the-show">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="霸王票0元任性看演出"  left-arrow :border="false" @click-left="onClickLeft">
            <template #right>
                <van-icon name="cluster-o" size="18" />
            </template>
        </van-nav-bar>


        <div class="no-yuan-for-the-show-img">
            <img src="" alt="">
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
    .no-yuan-for-the-show{
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .van-nav-bar{
            width: 100%;
            background-color: white;
            height: 31px;
            .van-icon{
                color: black;
            }
            .van-nav-bar__title{
                font-size: 16px;
                font-family: Regular;
                margin-left: 110px;
                color: #494949;
                font-weight: 600;
            }
            .van-nav-bar__left{
                margin-left: 12px;
                .van-icon{
                    font-size: 20px;
                }   
            }
            .van-nav-bar__right{
                margin-right: 20px;
                .van-icon{
                    font-size: 20px;
                }
            }
        }
        .no-yuan-for-the-show-img{
            width: 100%;
            height: 0;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>