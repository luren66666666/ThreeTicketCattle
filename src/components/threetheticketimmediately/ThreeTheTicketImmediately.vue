<template>
    <div class="buy-msg">
         <van-nav-bar title="立即购票" 
            left-arrow 
            @click-left="onClickLeft"
            @click-right="onClickRight">
            <template #right>
                <img src="../../assets/MineImg/nowBuy/圆角矩形 1@2x.png" alt="" width="27px">
            </template>
        </van-nav-bar>

        <!-- 详细信息 -->
        <main>
            <div class="wrap"   @click="hide">
                <van-field v-model="text1" label="姓名" placeholder="收货人姓名" clearable center/>
                <van-divider />
                <van-field v-model="tel" type="tel" label="电话" placeholder="收货人手机号码" clearable center />
                <van-divider />
                <van-field label="省市区" placeholder="请选择地区" :value="value"  readonly :right-icon="icon" center @click.stop="select"/>
                <van-divider />
                <van-field v-model="text3" label="街道" placeholder="收货人详细地址" center clearable/>
                <van-divider />
                <van-cell center title="设为默认地址">
                    <template #right-icon>
                        <van-switch v-model="checked" size="30" />
                    </template>
                </van-cell>
                <van-divider />
                <span class="posi">定位</span>
            </div>
            
            <!-- 点击遮罩层呵地区表 -->
            <van-action-sheet v-model="show" :overlay="false" :round="false">
                <van-area  
                :area-list="areaList" 
                title="地区" 
                visible-item-count="4" 
                value
                @change="change"/>
               
            </van-action-sheet>
            
        </main>
       
    </div>
</template>
<script>
import icon from "../../assets/MineImg/nowBuy/椭圆 2@2x.png"
import city from "../../../public/provinceList"

export default {
    data() {
        return {
            tel: '',
            text1: '',
            text2:'',
            text3:'',
            checked:'true',
            icon:icon,
            value:'',
            show:false,
            areaList:city
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
        ,onClickRight() {

        },
        select() {
            this.show = true;
            if(!this.value) {
                 this.value ='北京市/北京市/东城区'
            }
            // console.log(this.areaList)
        },
        change(el,val,index) {
            // console.log(val)
            this.value = val[0].name + '/' + val[1].name + '/' + val[2].name;
        },
        hide() {
            this.show = false
        },
    },
    
}
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .buy-msg {
        display: flex;
        flex-direction: column;
        align-items: center;
        .van-nav-bar {
            height: 36px;
            width:100%;
            font-size: 16px;
            line-height: 16px;
            &::v-deep .van-nav-bar__title  {
                font-weight: bold;
            }
            &::v-deep .van-icon {
                color: #4D4F49;
                font-size: 20px;
            }
        }
        // 信息栏
        main {
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 36px;
            bottom: 0;
            .wrap {
                width: 100%;
                height: 100%;
            }
             .posi {
                position: absolute;
                top: 133px;
                left: 336px;
                font-size:11px;
                color: #181818;
            }
            &::v-deep .van-field {
                width: 100%;
                height: 40px;
                padding: 0 14px;
                font-size: 12px;
                .van-field__label {
                    width: 60px;
                    margin: 0;
                    font-weight: bold;
                    color: #686868;
                }
            }
            .van-cell--center {
                height: 55px;
                padding: 0 14px;
                color: #686868;
                font-size: 12px;
                font-weight: bold;
            }
            &::v-deep .van-field__right-icon  {
                font-size: 14px;
                margin-right: 28px;
                padding: 0;
            }
            // 弹遮罩
            .van-picker__toolbar {
                display: none;
            }
        }
    }
</style>