<template>
    <div class="index-center">
     <section>
         <header>
            <span class="site">
                <img src="../../assets/index-img/椭圆 2.png" alt="">
                <strong>上海</strong>
            </span>
           <div class="inp">
               <van-search v-model="value" placeholder="动物园"  shape="round" />

           </div>
            <span class="calendar">
                <img src="../../assets/index-img/组 16 拷贝.png" alt="">
            </span>
         </header>
         <nav>
             <div class="to-search">热搜:</div>
             <div class="nav-list">
                <span>TFBOYS【日光旅行】</span>
                <span>周杰伦</span>
                <span>《猫》CATS</span>
                <span>动物园</span>
             </div>
         </nav>
     </section>
     <div class="banner">
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
             <van-swipe-item v-for="(item,index) in bannerList" :key="index">
                 <img :src="item" alt="">
             </van-swipe-item>
        </van-swipe>
       <van-grid :border="false"  column-num=5>
            <van-grid-item icon="photo-o" text="文字" v-for="(item,index) in 10" :key="index" />
        </van-grid>
     </div>
     <div class="operating-position">
         <div><img src="../../assets/index-img/组 5.png" alt=""></div>
         <div><img src="../../assets/index-img/组 6.png" alt=""></div>
     </div>
      <div class="service-entry">
          <span>服务保障</span>
          <ul>
              <li>先看后付</li>
              <li>先看后付</li>
              <li>先看后付</li>
              <li>先看后付</li>
          </ul>
      </div>
      <div class="middle-banner">
          <img src="https://img.piaoniu.com/misc/9ff0314237c236c796efbe132b5f00ec34e1630e.png" alt="">
      </div>
       <div class="list">
            <van-tabs v-model="active">
                <van-tab title="推荐">
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
                    <li>
                        <img src="../../assets/index-img/组 23.png" alt="">
                    </li>
                </van-tab>
                <van-tab title="大牌">内容 2</van-tab>
                <van-tab title="合辑">内容 3</van-tab>
                <van-tab title="榜单">内容 4</van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
// import indexList from '../index/List'
export default {
    data(){
        return {
            active:'',
           value:'',//搜索框的value
           bannerList:[
               'https://img.piaoniu.com/misc/7e17579c9e242c5193fc187dffa27168bd77666a.jpg?imageView2/2/w/750/h/350/format/jpg/q/80',
               'https://img.piaoniu.com/misc/36cc4188b53199e08f6da894a1c1caf4c2b004f7.png?imageView2/2/w/750/h/350/format/jpg/q/80',
               'https://img.piaoniu.com/misc/1a13fe31164fedbe0c478052ad1527294523e0ae.jpg?imageView2/2/w/750/h/350/format/jpg/q/80',
               'https://img.piaoniu.com/misc/1a13fe31164fedbe0c478052ad1527294523e0ae.jpg?imageView2/2/w/750/h/350/format/jpg/q/80'

               ]
        }
    },
    // component:{
    //     indexList
    // }
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
        padding:1px 15px 0 15px;
        font-size: 12px;
        section{
            width: 100%;
            height: 72px;
            header{
                display: flex;
                height: 32px;
                // background:purple;
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
                //   width: px;
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
                  width: 44px;
                  img{
                      width: 18px;
                      height: 19px;
                      margin-left:11px;
                      margin-top: 5px;
                  }
              }

            }
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
        }
        .banner{
           
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
               width: 50px;
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
           height: 1000px;
           background:#FAF9F9;
           .van-tab__pane{
               display: flex;
               justify-content: space-between;
               flex-wrap: wrap;
           }
           .list-conten{
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