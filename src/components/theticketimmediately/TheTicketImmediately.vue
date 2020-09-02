<template>
    <div class="Buy-tickets-immediately">
        <!-- 顶部导航栏 -->
        <van-nav-bar title="立即购票"  left-arrow :border="false">
            <template #right>
                <van-icon name="warning-o" size="18" />
            </template>
        </van-nav-bar>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .Buy-tickets-immediately{
        .van-nav-bar{
            height: 36px;
            .van-nav-bar__left{
                .van-icon{
                    font-size: 23px;
                    color: black;
                }
            }
            .van-nav-bar__title{
                font-size: 17px;
                font-family: Medium;
                color: #040000;
                font-weight: 600;
            }
            .van-nav-bar__right{
                .van-icon{
                    font-size: 20px;
                    color: black;
                }
            }
        }
    }
</style>