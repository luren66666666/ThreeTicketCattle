<template>
    <header>
        <transition name="slide-fade">
              <span v-if="show.isSite" class="site" @click="CitySelectionChange">
            <img src="../../assets/index-img/椭圆 2.png" alt="">
            <strong>上海</strong>
        </span>
        </transition>
      
        <div class="inp">
            <van-search v-model="value" placeholder="动物园"  shape="round" />
        </div>
        <div class="calendar">
            <img src="../../assets/index-img/组 16 拷贝.png" alt="">
            <span v-if="show.isCalendar">演出日历</span>
        </div>
    </header>

    
</template>
<script>
export default {
    props:{
        show:Object,
       
    },
    data(){
        return {
              value:'',//搜索框的value
          
        }
    },
    mounted(){
        this.CitySelectionChange()
    },
    methods:{
        CitySelectionChange(){
            console.log()
        }
    }
   
}
</script>>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
//   transform: translateX(-10px);
  opacity: 0;
}
  header{
        position: fixed;
        background:#fff;
        z-index: 11;
        display: flex;
        height: 32px;
        width: 100%;
            .site{
                width: 51px;
                display: flex;
                align-items: center;
                img{
                    margin-right:3px;
                    width: 11px;
                    height: 13px;
                }
            }
            .inp{
                border-radius:10px;
                .van-search{
                    width: 265px;
                    height: 100%;
                    padding: 0;
                    .van-search__content{
                        background:#F5F5F5;
                    }
                }
            }
            .calendar{
                height: 32px;
                display: flex;
                justify-content: center;
                span{
                    margin-left: 5px;
                    height: 100%;
                    line-height: 32px;
                }
                img{
                    width: 18px;
                    height: 19px;
                    margin-left:11px;
                    margin-top: 5px;
                }
            }

            }
</style>