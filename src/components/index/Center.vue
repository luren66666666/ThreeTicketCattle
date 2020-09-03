<!--
 * @Author: your name
 * @Date: 2020-09-02 10:33:49
 * @LastEditTime: 2020-09-02 17:48:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \票牛\ThreeTicketCattle\src\components\index\Center.vue
-->
<template>
  <div class="center-warp">
    <van-grid :border="false"  column-num=5>
        <van-grid-item   v-for="(item,index) in gridList" :text="item.text"  :class="item.icon" :key="index" />
    </van-grid>
    <div class="operating-position">
         <div><img src="../../assets/index-img/组 5.png" alt=""></div>
         <div><img src="../../assets/index-img/组 6.png" alt=""></div>
     </div>
       <div class="service-entry" @click="toServiceAssurance">
          <span>服务保障</span>
          <ul>
              <li>先看后付</li>
              <li>无票赔付</li>
              <li>出票保真</li>
              <li>配送保障</li>
          </ul>
      </div>
      <div class="middle-banner">
          <img src="https://img.piaoniu.com/misc/9ff0314237c236c796efbe132b5f00ec34e1630e.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gridList:[
        {
          icon:"iconfont icon-yanchanghui",
          text:"演唱会"
        },
         {
          icon:"iconfont icon-lvyoushatanyusanlvhangxianxing",
          text:"旅游玩乐"
        },
        {
          icon:"iconfont icon-ss",
          text:"话剧歌剧"
        }, {
          icon:"iconfont icon-zhanlan",
          text:"休闲展示"
        },
         {
          icon:"iconfont icon-tiyusaishi",
          text:"体育赛事"
        },
         {
          icon:"iconfont icon-yinlehui",
          text:"音乐会"
        },
         {
          icon:"iconfont icon-yazi",
          text:"儿童亲子"
        },
         {
          icon:"iconfont icon-gufengwujianzhongguofengshanzizheshan",
          text:"戏曲综艺"
        },
         {
          icon:"iconfont icon-wudao",
          text:"舞蹈芭蕾"
        },
         {
          icon:"iconfont icon-shenghuo",
          text:"潮生活"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    toServiceAssurance() {
      this.$router.push("/serviceassurance");
    }
  }
};
</script>
<style lang='scss'>

.center-warp{
  height: 384px;
  .van-grid{
    padding:15px 0;

  }
  .van-grid-item {
    width: 40px;
    height: 60px;
  }
  .iconfont{
    width: 40px;
    font-size: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;

  }
}
</style>
