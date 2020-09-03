<template>
    <div class="list">
            <van-tabs v-model="active"  swipeable sticky offset-top="32px">
                <van-tab title="推荐" >
                     <li class="list-conten">
                        <div class="list-img">
                            <img src="../../assets/index-img/组 19.png" alt="">
                            <span>票牛口碑榜NO1</span>
                        </div>
                        <a>长安马自达氧气LIVE 音乐节</a>
                        <div class="time">2020.08.25-08.31</div>
                        <div class="price">
                            <span class="price-num">8.4折</span>
                            <span>起</span>
                        </div>
                    </li>
                    <li class="list-conten">
                        <div class="list-img">
                            <img src="../../assets/index-img/组 20.png" alt="">
                            <span>票牛口碑榜NO1</span>
                        </div>
                        <a>长安马自达氧气LIVE 音乐节</a>
                        <div class="time">2020.08.25-08.31</div>
                        <div class="price">
                            <span class="price-num">8.4折</span>
                            <span>起</span>
                        </div>

                    </li>
                    <li class="list-conten">
                        <img src="../../assets/index-img/组 23.png" alt="" class="li-img">
                    </li>
                    <li class="list-conten">
                        <div class="list-img">
                            <img src="../../assets/index-img/组 21.png" alt="">
                            <span>票牛口碑榜NO1</span>
                        </div>
                        <a>长安马自达氧气LIVE 音乐节</a>
                        <div class="time">2020.08.25-08.31</div>
                        <div class="price">
                            <span class="price-num">8.4折</span>
                            <span>起</span>
                        </div>
                    </li>
                    <li class="list-conten">
                        <div class="list-img">
                            <img src="../../assets/index-img/组 24.png" alt="">
                            <span>票牛口碑榜NO1</span>
                        </div>
                        <a>长安马自达氧气LIVE 音乐节</a>
                        <div class="time">2020.08.25-08.31</div>
                        <div class="price">
                            <span class="price-num">8.4折</span>
                            <span>起</span>
                        </div>

                    </li>
                </van-tab>
                <van-tab title="大牌" class= "van-tab--active">
                  <ul class="major">
                   <li v-for="(item,index) in 5" :key="index"></li> 
                  </ul>
                </van-tab>
                <van-tab title="合辑" class= "van-tab--active">
                 <ul class="collection">
                   <li v-for="(item,index) in 3" :key="index">
                     <div class="collection-img">
                       <img src="/img/组 5.0f58a53c.png" alt="">
                     </div>
                     <div class="collection-content">
                       <p class="content-title">
                         <span class="title-weight" >2020音乐节</span>
                         <span>2020</span>
                       </p>
                       <p class="content-icon"></p>
                     </div>
                   </li>
                 </ul>
                </van-tab>
                <van-tab title="榜单" class= "van-tab--active">内容 4</van-tab>
            </van-tabs>
        </div>
  
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
         active:'',
      searchResult: [],
    
    };
  },



  computed: {},

  mounted() {
      // console.log( this.searchResult)
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>
<style lang='scss'>

@mixin lt{
    margin-left: 6px;
    margin-top:10px;
}
@mixin list-top{
   margin-top:15px;
   width:375px;
      }   
  
   .major{
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     @include list-top;
      li{
        width: 48%;
        height: 200px;
        background:url("https://img.piaoniu.com/poster/a3ae8f160ca8dcf513c22ff630f3a36fb99bad37.jpg?imageView2/2/w/220/h/164/format/jpg/q/60")no-repeat;
        background-size:170px 200px;
        margin-bottom:20px;

      }
    }
    .collection{
        @include list-top;
        width: 100%;
        li{
          margin-bottom: 20px;
        }
        img{
          width: 100%;
        }
        .collection-content{
            display: flex;
            padding:0 15px;
            justify-content:space-between; 
            background-color: #fff;
          .content-title{
            display: flex;
            flex-direction: column;
            .title-weight{
              font-weight: 1000;

            }

          }  
          .content-icon{
              width: 100px;
              height: 30px;
              border-radius: 20px;
              background-color:red;
          }
      }
    }
   .list{
 
      background:#FAF9F9;
     .van-tab__pane{
       display: flex;
       justify-content: space-between;
       flex-wrap: wrap;
       position: relative;
     } 
    .list-conten{
        height: 279px;
        
        .li-img{
            width: 173px;
            height: 255px;
        }
        margin-top:20px;
        width: 168px;
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
</style>
