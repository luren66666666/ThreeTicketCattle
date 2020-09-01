<template>
  <div>
    <van-grid :border="false"  column-num=5>
        <van-grid-item icon="photo-o" text="文字" v-for="(item,index) in 10" :key="index" />
    </van-grid>
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped></style>
