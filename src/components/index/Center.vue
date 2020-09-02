<template>
  <div class="center-warp">
    <van-grid :border="false"  column-num=5>
        <van-grid-item   v-for="(item,index) in gridList" :text="item.text"  :icon="item.icon" :key="index" />
    </van-grid>
    <div class="operating-position">
         <div><img src="../../assets/index-img/组 5.png" alt=""></div>
         <div><img src="../../assets/index-img/组 6.png" alt=""></div>
     </div>
       <div class="service-entry">
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
          icon:"smile-o",
          text:"演唱会"
        },
         {
          icon:"smile-o",
          text:"旅游玩乐"
        },
        {
          icon:"smile-o",
          text:"话剧歌剧"
        }, {
          icon:"smile-o",
          text:"休闲展示"
        },
         {
          icon:"smile-o",
          text:"体育赛事"
        },
         {
          icon:"smile-o",
          text:"音乐会"
        },
         {
          icon:"smile-o",
          text:"儿童亲子"
        },
         {
          icon:"smile-o",
          text:"戏曲综艺"
        },
         {
          icon:"smile-o",
          text:"舞蹈芭蕾"
        },
         {
          icon:"smile-o",
          text:"潮生活"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss'>

.center-warp{
  height: 384px;
  
}
</style>
