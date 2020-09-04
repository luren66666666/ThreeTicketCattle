<template>
    <header>
        <transition name="slide-fade">
            <span v-if="show.isSite" class="site" @click="CitySelectionChange">
            <img src="../../assets/index-img/椭圆 2.png" alt="">
            <strong>{{citys}}</strong>
        </span>
        </transition>
      
        <div class="inp">
            <van-search v-model="value" placeholder="动物园"  shape="round" />
        </div>
        <div class="calendar" @click="jumpCalendar">
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
              contenShow:true , //首页切换地址
              citys:''
          
        }
    },
    mounted(){
         this.citys=this.$store.state.city
    },
    methods:{
       
        CitySelectionChange(){
          this.$store.commit('changecity',{    //点击改变vuex的city值
              val:this.citys
          })
          this.$router.push('/CitySelection')  //点击切换到城市地址页面 
        },
       
        jumpCalendar(){
            this.$router.push('/calendar')    //点击跳转日历页面
        },
        
    }
   
}
</script>>
<style lang="scss" >
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
.van-grid-item__content{
    padding:0;
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