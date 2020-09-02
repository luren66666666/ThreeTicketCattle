<template>
 <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
            <img :src="item" alt="">
        </van-swipe-item>
    </van-swipe>
 
 </div>
</template>

<script>
export default {
  data() {
    return {
          bannerList:[
               'https://img.piaoniu.com/misc/7e17579c9e242c5193fc187dffa27168bd77666a.jpg?imageView2/2/w/750/h/350/format/jpg/q/80',
               'https://img.piaoniu.com/misc/36cc4188b53199e08f6da894a1c1caf4c2b004f7.png?imageView2/2/w/750/h/350/format/jpg/q/80',
               'https://img.piaoniu.com/misc/1a13fe31164fedbe0c478052ad1527294523e0ae.jpg?imageView2/2/w/750/h/350/format/jpg/q/80',
               'https://img.piaoniu.com/misc/1a13fe31164fedbe0c478052ad1527294523e0ae.jpg?imageView2/2/w/750/h/350/format/jpg/q/80'

               ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped></style>
