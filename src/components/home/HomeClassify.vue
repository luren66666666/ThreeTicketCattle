<template>
    <div class="classify-center">
        <div class="nav">
        <span class="search-add">杭州</span>
        <img src="../../assets/票牛-分类_slices/形状 1.png" alt="" class="search-img">
        <van-search v-model="value" placeholder="搜索明星、演出、场所、景点" class="search-logo" shape="round"/>
        </div>
        <!-- 导航栏 -->
        <van-tabs v-model="active" swipeable>
        <van-tab v-for="(item, index) in list" 
        :title="item.title" 
        :key="index">
         </van-tab>
            </van-tabs>
            <van-dropdown-menu>
                <!-- 综合排序 -->
            <van-dropdown-item v-model="values" :options="option" />
            <!-- 全部时间 -->
            <van-dropdown-item :title="date || '全部时间'" ref="item" v-model="value">
            <van-cell title="9月演出" 
            :value="date" 
            @click="show = true" 
            close-on-click-overlay="true"
            />
             <!-- <van-card
                v-for="(item, index) in 10"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                :key="index"
                >
                <template #tags>
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
                </template>
                </van-card> -->
            <van-calendar v-model="show" @confirm="onConfirm" @select="aaa"/>
            </van-dropdown-item>
            </van-dropdown-menu>
            <!-- 列表 -->
            <van-card
                v-for="(item, index) in 10"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                :key="index"
                >
                <template #tags>
                    <van-tag plain type="danger">标签</van-tag>
                    <van-tag plain type="danger">标签</van-tag>
                </template>
                </van-card>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data() {
    return {
        values:0,
        value:'',
        active: '1',
        
        switch1: false,
        switch2: false,
        date: '',
        show:'',
        how: false,
        option: [
        { text: '综合排序', value: 0 },
        { text: '最新优先', value: 1 },
        { text: '低价优先', value: 2 },
        { text: '好评优先', value: 2 },
      ],
        list:[
            {
            id:'1',
            title:'全部分类'
            },
            {
            id:'2',
            title:'演唱会'
            },
            {
            id:'3',
            title:'旅游玩乐'
            },
            {
            id:'4',
            title:'话剧歌剧'
            },
            {
            id:'5',
            title:'休闲展览'
            },
            {
            id:'6',
            title:'体育赛事'
            },
            {
            id:'7',
            title:'音乐会'
            },
            {
            id:'8',
            title:'儿童亲子'
            },
            {
            id:'9',
            title:'戏曲综艺'
            },
            {
            id:'10',
            title:'舞蹈芭蕾'
            },
            {
            id:'11',
            title:'潮生活'
            },
        ]
    }
},methods: {
    aaa(date) {
        console.log(date)
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
      console.log(this.date)
    },
  },
}
</script>
<style lang="scss">
.nav{
    display: flex;
}
    .search-add{
        margin: 10px;
        font-size: 18px;
    }
    .search-img{
        height: 9px;
        width: 10px;
        margin-top: 20px;
    }
    .search-logo{
        width: 300px;
        height: 30px;
        margin-top: 10px;
        
    }
</style>