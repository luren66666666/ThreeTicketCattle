<template>
    <div class="edit-container"> 
       <van-nav-bar
            title="个人资料"
            right-text="保存"
            left-arrow
            @click-left="goBack"
        />
        <h5>完善资料可以帮助提高会员等级</h5>
        <section>
            <div class="section-top">
                <div class="tit-img">
                    <van-cell is-link center>
                     <template>
                         <span class="custom-title">更换头像</span>
                         <van-image
                            round
                            width="72px"
                            height="72px"
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                     </template>
                    </van-cell>
                </div>
                <div class="user-name">
                    <van-cell title="昵称" is-link value="A-陈志龙" />
                </div>
                <van-cell title="性别" is-link :value="sex?sex:'未添加'" @click="showsex=true" />
                <van-popup
                    v-model="showsex"
                    position="bottom"
                    :style="{ height: '60%',width: '375px' }"
                >
                    <van-picker show-toolbar
                        @cancel='showsex=false'
                        @confirm='sexshow'
                        title="性别" :columns="columns" :default-index="0" />
                </van-popup>
                <van-cell title="生日" is-link :value="date?date:'未添加'" @click="showdate=true" />
                <van-popup
                    v-model="showdate"
                    position="bottom"
                    :style="{ height: '60%',width: '375px' }"
                    >
                   <van-datetime-picker
                    ref="useful"
                    v-model="currentDate"
                    @cancel='showdate=false'
                    @confirm='getdate'
                    type="date"
                    title="选择年月日"
                    :min-date="minDate"
                    :max-date="maxDate"
                    />
                </van-popup>
            </div>
            <div class="section-bottom">
                <van-cell title="签名" value="20字" size="" />
                <van-cell-group>
                    <van-field v-model="value" label="" placeholder="" />
                </van-cell-group>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:'',
            showdate:false,
            showsex:false,
            columns: ['男','女'],
            sex:'',
            minDate: new Date(1900, 0, 1),
            maxDate: new Date(),
            currentDate: new Date(1998,1,16),
            date:''
        }
    },
    methods: {
        sexshow(val){
            this.sex = val;
            this.showsex = false;
        },
        getdate(){
            this.showdate = false;
            let date = this.$refs.useful.getPicker().getValues();
            this.date = date[0]+'-'+date[1]+'-'+date[2];
        },
        goBack(){
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="scss">
    .edit-container{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .van-icon-arrow-left{
            width: 10px;
            height: 17px;
            color: #4E4E48;
        }
        .van-nav-bar__title{
            font-size: 16px;
            font-family: Bold;
            font-weight: bold;
            color: #505050;
            line-height: 30px;
        }
        h5{
            margin: 0;            
            height: 24px;
            background: #FFE6A6; 
            font-size: 12px;
            font-family: Medium;
            font-weight: 500;
            color: #EE8424;
            line-height: 24px;
            text-align: center;
        }
        section{
            background: #f2f2f2;
            position: absolute;
            left: 0;
            top: 68px;
            right: 0;
            bottom: 0;
            .section-top{
                margin-bottom: 15px;
                .van-cell__title{
                    font-size: 16px;
                    font-family: Medium;
                    font-weight: 500;
                    color: #000000;
                    line-height: 29px;
                }
                .tit-img{
                    height: 100px;
                    .van-cell{
                        height: 100px;
                        position: relative;
                        .van-cell__value{
                            overflow: visible;
                        }
                        .van-image{
                            position: absolute;
                            left: 255px;
                            top:50%;
                            z-index: 9;
                            transform: translateY(-50%);
                        }
                    }
                }
                .user-name{
                    .van-cell__value{                        
                        color: #000000;
                    }
                }
                .van-picker{
                    overflow: hidden;
                }
                .van-cell__value{
                    color: #000;
                }
            }
            .section-bottom{
                .van-field{
                    height: 82px;
                }
            }
        }
    }
</style>