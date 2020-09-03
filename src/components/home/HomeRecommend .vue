<template>
     <div>
        <div class="index-center" @scroll="ScrollHeight"  >
            <indexHeader :show="show"   />
            <indexNav />
            <indexBanner />
            <indexCenter />
            <indexList />
        </div>
    
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
            nav{
                padding-top: 32px;
                height: 40px;
                display: flex;
                color:#666969;        
                align-items:center;
                .nav-list{
                    display: flex;
                    width: 300px;
                    justify-content: space-around;
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
     
    }
</style>