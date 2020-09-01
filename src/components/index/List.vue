<template>
  <div class="list">1
     <van-tabs v-model="active" swipeable>
        <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
            内容 {{ index }}
        </van-tab>
      </van-tabs>
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
