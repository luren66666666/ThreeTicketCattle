<template>
  <div class="city-warp">
     <van-icon name="cross" class="getBack"  @click="getBack"/>
     <van-nav-bar title="城市选择"  class="cityChoose" >

     </van-nav-bar>
      <div class="hot-city">
        <span class="city-title">热门城市</span>
        <ul class="hot-list">
          <li v-for="(item,index) in hotcity" :key="index">{{item}}</li>
         
        </ul>
      </div>
      <van-index-bar  class="city-list">
            <div v-for="(value,key,i) in hotList" :to="i" :key="key">
             <van-index-anchor  :index="key" />
                <van-cell  v-for="(item,index) in value" :key="index" :title="item" />
            </div>
      </van-index-bar>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      cityChild:true,
      hotcity:['杭州','广州','北京','上海','深圳'],   //等后端给数据
      hotList:{ 
           A:['a1','a2','a3','a4',] ,
           B:['b1','b2','b3','b3',] ,
           C:['c1','c2','c3','c3',] ,
           D:['d1','d2','d3','d3',] ,
      }
      ,
     
    
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods:{
        getBack(){
             console.log(this.cityChild)
             this.$emit('mssge',this.cityChild)
        }
    }
};
</script>
<style lang='scss'>
.city-warp{
  box-sizing: content-box;
  position: relative;
  width: 100%;
  .getBack{
    height: 40px;
    line-height: 40px;
    z-index: 11;
    font-size: 24px;
    margin-left: 15px;
    color:#ccc;
    position:absolute;
  }
  .cityChoose{
    width: 100%;
    position:absolute;
  }
  .hot-city{
    padding-top:30px;
    font-size:16px;
    position: absolute;
    top:46px;
    width: 100%;
    background:rgb(216, 213, 213);
    .city-title{
      color: #6c6c6c;
      padding:0 15px;

    }
    .hot-list{
      margin-top:15px;
      display: flex;
      flex-direction:row;
      flex-wrap: wrap;
      align-content:  flex-start; 
      margin-bottom:50px;
      padding:0 15px;
      li{
        margin-right:5%;
        margin-top: 10px;
        width: 30%;
        height: 40px;
        background:#fff;
        text-align: center;
        line-height: 40px;
      }
      li:nth-child(3n){
        margin-right:0;
      }
    }
    
  }
  .city-list{
      position: absolute;
      top:300px;
    }
}
</style>
