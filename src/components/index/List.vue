<template>
    <div class="list">
            <van-tabs v-model="active"  sticky offset-top="32px">
                <van-tab title="推荐" class="hhh">
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
                    <li class="list-conten">
                        <img src="../../assets/index-img/组 23.png" alt="" class="li-img">
                    </li>
                </van-tab>
                <van-tab title="大牌">
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
                    <li class="list-conten">
                        <img src="../../assets/index-img/组 23.png" alt="" class="li-img">
                    </li>
                </van-tab>
                <van-tab title="合辑">
                    
                    <van-address-edit
                        :area-list="areaList"
                        show-postal
                        show-delete
                        show-set-default
                        show-search-result
                        :search-result="searchResult"
                        :area-columns-placeholder="['请选择', '请选择', '请选择']"
                        @save="onSave"
                        @delete="onDelete"
                        @change-detail="onChangeDetail"
                    />
                </van-tab>
                <van-tab title="榜单">内容 4</van-tab>
            </van-tabs>
        </div>
  
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
         active:'',
              areaList:{
  province_list: {
    110000: '北京市',
    120000: '天津市'
  },
  city_list: {
    110100: '北京市',
    110200: '县',
    120100: '天津市',
    120200: '县'
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区',
    120101: '和平区',
    120102: '河东区',
    120103: '河西区',
    120104: '南开区',
    120105: '河北区',
    // ....
  }
},
      searchResult: [],
    };
  },

  components: {},

  computed: {},

  mounted() {
      console.log( this.searchResult)
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
<style lang='scss' scoped>
.van-tabs__nav{

}
</style>
