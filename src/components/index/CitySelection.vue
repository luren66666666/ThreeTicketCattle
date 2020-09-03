<template>
  <div class="city-warp">
     <div class="city-header">
        <van-icon name="cross" class="getBack"  @click="getBack"/>
        <van-nav-bar title="城市选择"  class="cityChoose" >
        </van-nav-bar>
     </div>
      <div class="hot-city">
        <section class="hot-present">
          <span class="present-left">{{city}}</span>
          <span class="present-right">当前城市</span>
        </section>
        
        <div class="hot-list">
          <span class="city-title">热门城市</span>
          <ul>
              <li v-for="(item,index) in hotcity" :key="index" @click="hotCity(item)">{{item}}</li>
          </ul>
        </div>
      </div>
      <van-index-bar  class="city-list">
            <div v-for="(value,key,i) in hotList" :to="i" :key="key">
             <van-index-anchor  :index="key" />
                <van-cell  v-for="(item,index) in value" :key="index" :title="item"  @click="gainCity(item)" />
            </div>
      </van-index-bar>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      cityChild:true,
      hotcity:['杭州','广州','北京','上海','深圳','成都'],   //等后端给数据
      hotList:{ 
           A:['a1','a2','a3','a4',] ,
           B:['b1','b2','b3','b3',] ,
           C:['c1','c2','c3','c3',] ,
           D:['d1','d2','d3','d3',] ,
      },
      city:''
     
    
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.city=this.$store.state.city
  },

  methods:{
        
        getBack(){
            this.$router.go(-1) //返回首页
        },
        hotCity(val){
            this.$store.commit('changecity',{  //点击热门城市 把当前的城市值赋给vuex的city
              val
            })
            this.$router.go(-1)
        }, 
        gainCity(val){
              this.$store.commit('changecity',{  //点击热门城市 把当前的城市值赋给vuex的city
              val
            })
            this.$router.go(-1)
        }
     
  }

};
</script>
<style lang='scss'>
.city-warp{
  width: 100%;
  display: flex;
 
  flex-direction: column;
  .city-header{
     display: flex;
     align-items: center;
     border-bottom: 1px solid #ccc;
     .cityChoose {
        width: 100%;
     }
       .getBack{
        height: 40px;
        color:#6c6c6c;
        font-size: 24px;
        margin-left: 15px;
        line-height: 40px;
        
    }
   
 }
 .hot-city{
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    .hot-present{
      padding:10px 0px 10px 15px;
      .present-left{
        font-size: 18px;
        color: #000;
      }
      .present-right{
        margin-left:10px;
        font-size: 12px;
        color: #6c6c6c;
      }
    }
    .hot-list{
      margin-right:15px;
      background:rgb(216, 213, 213);
      .city-title{
        display: block;
        font-size: 12px;
        margin:15px;
      }
      ul{
   
        padding: 0 15px;
        display: flex;
        margin-bottom: 25px;
        flex-wrap: wrap;
        justify-content: space-between;;
        li{
          font-size: 16px;
          height: 30px;
          width: 30%;
          margin-top: 15px;
          background:#fff;
          text-align: center;
          line-height: 30px;
        }
      }
     
    }

}

//   .cityChoose{
//     width: 100%;

//   }
//   .hot-city{
//     padding-top:30px;
//     font-size:16px;
//     position: absolute;
//     top:46px;
//     width: 100%;
//     background:rgb(216, 213, 213);
//     .city-title{
//       color: #6c6c6c;
//       padding:0 15px;

//     }
//     .hot-list{
//       margin-top:15px;
//       display: flex;
//       flex-direction:row;
//       flex-wrap: wrap;
//       align-content:  flex-start; 
//       margin-bottom:50px;
//       padding:0 15px;
//       li{
//         margin-right:5%;
//         margin-top: 10px;
//         width: 30%;
//         height: 40px;
//         background:#fff;
//         text-align: center;
//         line-height: 40px;
//       }
//       li:nth-child(3n){
//         margin-right:0;
//       }
//     }
    
//   }
//   .city-list{
//       top:300px;
//       width: 100%;
      
// }
   }
</style>
