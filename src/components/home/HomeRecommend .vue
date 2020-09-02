<template>
     <div>
        <div class="index-center" @scroll="ScrollHeight" v-if="contenShow" >
            <indexHeader :show="show"  @massge="receiveChild"  />
            <indexNav />
            <indexBanner />
            <indexCenter />
            <indexList />
        </div>
        <CitySelection v-if="!contenShow"  @mssge="cccc" />
     </div>
     
  
    
</template>
<script>
import indexHeader from '../index/Herder'
import indexNav from '../index/Nav'
import indexBanner from '../index/Banner'
import indexCenter from '../index/Center'
import indexList from '../index/List'
import CitySelection from '../index/CitySelection'
export default {
    
    data(){
        return {
        contenShow:true,
        show:{
        isSite:true,
        isCalendar:false,
        
        }
        }
    },
    components:{
       indexHeader,
       indexNav,
       indexBanner,
       indexCenter,
       indexList,
       CitySelection
    },
    watch:{
    
    },

    
    mounted(){
       
         window.addEventListener('scroll', this.ScrollHeight, true)
      
    },
    methods:{
        ScrollHeight(){
            const top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset)
             if(top>400){
                 this.show.isSite=false
                 this.show.isCalendar=true
             }else{
                  this.show.isSite=true
                  this.show.isCalendar=false
             }
             
     
        },
        receiveChild(val){
            this.contenShow=val
             
        },
        cccc(val){
        
            this.contenShow=val
        }
    }
}
</script>
<style lang="scss" >

@mixin lt{
    margin-left: 6px;
    margin-top:10px;
}
li{
    list-style:none;
}
    .index-center{
        box-sizing: content-box;
        padding:0 15px 0 15px;
        font-size: 12px;
        // position: absolute;
            nav{
                display: flex;
                align-items:center;
                color:#666969;
                height: 40px;
                .nav-list{
                    display: flex;
                    justify-content: space-around;
                    width: 300px;
                }
               
            }
        
        .banner{
            height: 106px;
            img{
            height: 106px;
            width: 345px;
            }
        
        .van-swipe__indicator{
            width: 15px;
            border-radius: 0;
            height: 2px;
          }
     }
       .operating-position{
            display: flex;
            justify-content: space-between;
            img{
                width: 169px;
                height: 63px;
            }
   }
       .service-entry{
           align-items: center;
           background:#FBFBFB;
           margin-top:14px;
           display: flex;
           width: 345px;
           height: 29px;
           justify-content: space-between;
           span{
               width: 60px;
               font-weight: 50;
            //    flex:1;
           }
           ul{
               color: #848788;
               width: 290px;
               display: flex;
               justify-content: flex-end;
               li{
                   border-right:3px solid #ccc;
                   padding:0 5px;
               }
               li:last-child{
                   border-right:none;
               }
           }
       }
       .middle-banner{
           margin-top: 24px;
           width: 345px;
           height: 80px;
           margin-bottom:10px;
           img{
               width: 100%;
               height: 100%;
           }
       }
       .list{
           background:#FAF9F9;
           .van-tab__pane{
               display: flex;
               justify-content: space-between;
               flex-wrap: wrap;
           }
           .list-conten{
               .li-img{
                   width: 173px;
                   height: 255px;
               }
               margin-top:20px;
               width: 168px;
               height: 278px;
               background:#fff;
               .list-img{
                   width: 100%;
                   height: 173px;
                   position:relative;
                   span{
                       color: #F0D68D;
                       position:absolute;
                       bottom:0px;
                       transform:translateX(50%);
                   }
               }
               img{
                   position: absolute;
                   width: 100%;
                   height: 100%;
               }
               a{
                   @include lt;
                   display: block;
                   width: 122px;
                   color: #000;
                   font-weight: 700;
                   font-size: 14px;
               }
               .time{
                   @include lt;
                   color: #959495;
               }
               .price{
                   @include lt;
                   .price-num{
                       font-size: 18px;
                       color: #E72257;
                        font-weight: 600;
                   }
               }
           }
          
       }
    }
</style>