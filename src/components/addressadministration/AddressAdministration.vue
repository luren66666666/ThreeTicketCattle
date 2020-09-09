<template>
    <div class="address-administration">
        <!-- 顶部导航栏 -->
        <van-nav-bar :title="title"  left-arrow :border="false" @click-left="onClickLeft">
        </van-nav-bar>

        <!-- 地址详情列表? -->
        <div class="address-list">
            <span class="name">陈志龙</span>
            <span class="tel">13185985587</span>
            <div class="addressTiele">
                <span>北京市</span> <span>北京市</span> <span>东城区</span> <span>陈志龙</span>
            </div>
            <van-icon name="description" />
        </div>

        <!-- 添加新地址 -->
        <div class="add-address" @click="addAddress">
            <span>+添加新地址</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'地址管理',
        }
    },
    methods: {
        addAddress(){//添加新地址
            this.$router.push('/threetheticketimmediately')
        },
        onClickLeft(){
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="scss">
    .address-administration{
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .van-nav-bar{
            width: 100%;
            height: 30px;
            .van-icon{
                color: black;
                font-size: 18px;
            }
            .van-nav-bar__title{
                font-size: 15px;
                font-family: Bold;
                margin-left: 156px;
                color: #4B4B4B;
            }
            .van-nav-bar__left{
                margin-left: 17px;
            }
        }
        .address-list{
            margin-top: 5px;
            width: 100%;
            height: 67px;
            border-top: 1px solid #BFBFBF;
            border-bottom: 1px solid #BFBFBF;
            position: relative;
            .name{
                font-size: 13px;
                position: absolute;
                left: 13px;
                top: 16px;
                font-family: Bold;
                color: #4B4B4B;
                font-size: 13px;
            }
            .tel{
                font-size: 13px;
                position: absolute;
                left: 70px;
                top: 16px;
                font-family: Bold;
                color: #4B4B4B;
                font-size: 13px;
            }
            .addressTiele{
                position: absolute;
                left: 13px;
                top: 30px;               
                span{
                    font-size: 12px;
                    font-family: Medium;
                    color: #919191;
                }
            }
            .van-icon{
                position: absolute;
                left: 335px;
                top: 18px;
                color: #919191;
            }
        }
        .add-address{
            width: 350px;
            height: 40px;
            border: 1px solid #F50949;
            position: absolute;
            left: 12px;
            bottom: 11px;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                color: #F50949;
                font-size: 15px;
            }
        }
    }
</style>