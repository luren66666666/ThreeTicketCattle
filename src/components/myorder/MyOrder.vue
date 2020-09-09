<template>
    <div class="order">
        <header>
            <img src="../../assets/MineImg/vipClub/形状 1@2x.png" alt="">
            <van-dropdown-menu active-color="#FF2662">
                 <van-dropdown-item title="筛选" ref="item">
                    <van-cell center title="包邮">
                    <template #right-icon>
                        <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
                    </template>
                    </van-cell>
                    <van-cell center title="团购">
                    <template #right-icon>
                        <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
                    </template>
                    </van-cell>
                    <div style="padding: 5px 16px;">
                    <van-button type="danger" block round @click="onConfirm">
                        确认
                    </van-button>
                    </div>
                </van-dropdown-item>
            </van-dropdown-menu>
             
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {
             value: 0,
             option: [
                { text: '我的订单', value: 0 },
                { text: '拼团订单', value: 1 },
                { text: '抢票订单', value: 2 },
                { text: '求票订单', value: 3 },
                { text: 'sku订单', value: 4 },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .order {
        display: flex;
        flex-direction: column;
        align-items: center;
        header {
            height: 36px;
            width: 100%;
            color: #545454;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0.05333rem 0.32rem rgba(100,101,102,.12);
            font-weight: bold;
            img {
                width: 27px;
                height: 27px;
                position: absolute;
                top: 5px;
                left: 10px;
            }
            .van-dropdown-menu {
                height: 100%;
                &::v-deep .van-dropdown-menu__bar {
                    height: 100%;
                    box-shadow:none
                }
                &::v-deep .van-cell {
                     padding: 0 10px;
                    width: 96px;
                    height: 44px;
                    border: 1px solid 
                }
                .van-popup {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    flex-wrap: wrap;
                }
            }
        }
    }
</style>