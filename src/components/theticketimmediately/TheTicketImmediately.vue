<template>
    <div class="Buy-tickets-immediately" >
        <!-- 顶部导航栏 -->
        <van-nav-bar title="立即购票"  left-arrow fixed :placeholder="true"  >
            <template #right>
                <van-icon name="warning-o" size="18" />
            </template>
        </van-nav-bar>
        <p class="ptime">选择场次</p>
        <div class="divtime"></div>
        <div class="divtime"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
// @import '@/assets/style/reset.scss';
    .Buy-tickets-immediately{
        // background-color: white;
        .van-nav-bar{
            height: 36px;
            // border-bottom: 1px solid #A0A0A0;
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
        .ptime{
            font-size: 14px;
            font-family: Medium;
            color: #040000;
            margin-top: 22px;
            margin-left: 15px;
            margin-bottom: 13px;
        }
        .divtime{
            width: 346px;
            height: 38px;
            background-color: #FFF1F4;
            margin-left: 15px;
            margin-top: 10px;
        }
    }
</style>