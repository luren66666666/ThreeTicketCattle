<template>
    <div class="the-scene">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="十分现场"  left-arrow :border="false" @click-left="onClickLeft">
            <template #right>
                <van-icon name="cluster-o" size="18" />
            </template>
        </van-nav-bar>


        <div class="the-scene-img">
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
    .the-scene{
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .van-nav-bar{
            width: 100%;
            background-color: white;
            height: 33px;
            .van-icon{
                color: black;
            }
            .van-nav-bar__title{
                font-size: 17px;
                font-family: Regular;
                margin-left: 156px;
                color: #4A4A4A;
                font-weight: 600;
            }
            .van-nav-bar__left{
                margin-left: 17px;
                .van-icon{
                    font-size: 20px;
                }   
            }
            .van-nav-bar__right{
                margin-right: 13px;
                .van-icon{
                    font-size: 20px;
                }
            }
        }
        // height: 0;
        .the-scene-img{
            width: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>