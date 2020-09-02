/*
 * @Author: your name
 * @Date: 2020-08-31 20:00:24
 * @LastEditTime: 2020-09-02 10:41:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \票牛\ThreeTicketCattle\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/style/font.scss"

import "amfe-flexible";
import {
    Button,
    Tabbar,
    TabbarItem,
    Search,
    Icon,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Tab,
    Tabs,
    NavBar,
    DropdownMenu,
    DropdownItem,
    Calendar,
    Cell,
    Card,
    Tag,
    Image as VanImage,
    CellGroup,
    AddressEdit,
    IndexBar,
    IndexAnchor,
    Circle,
    Popup,
    Sticky,
    PullRefresh,
    Empty,
    Divider,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
} from 'vant';

Vue.use(Button); //Button 按钮
Vue.use(Tabbar); //Tabbar 标签栏
Vue.use(TabbarItem); //Tabbar 标签栏
Vue.use(Search); //Search 搜索
Vue.use(Icon); //Icon 图标
Vue.use(Swipe) //Swipe 轮播
Vue.use(SwipeItem) //Swipe 轮播
Vue.use(Grid) //Grid 宫格
Vue.use(GridItem) //Grid 宫格
Vue.use(Tab) //Tab 标签页
Vue.use(Tabs) //Tab 标签页
Vue.use(NavBar); //NavBar 导航栏
Vue.use(DropdownMenu); //综合排序
Vue.use(DropdownItem); //综合排序
Vue.use(Calendar); //Cell 日历
Vue.use(Cell); //Cell 单元格
Vue.use(Card); //分类列表
Vue.use(Tag); //分类列表
Vue.use(VanImage); //图片头像
Vue.use(CellGroup); //展示箭头
Vue.use(AddressEdit) //AddressEdit 地址编辑
Vue.use(IndexBar) //IndexBar 索引栏
Vue.use(IndexAnchor) //IndexBar 索引栏
Vue.use(Circle) //环形进度条
Vue.use(Popup); // 弹出层
Vue.use(Sticky); //顶部吸附
Vue.use(PullRefresh); //下拉刷新
Vue.use(Empty); //空状态
Vue.use(Divider) //分割线  显示文本
Vue.use(GoodsAction) //GoodsAction 商品导航
Vue.use(GoodsActionIcon) //GoodsAction 商品导航
Vue.use(GoodsActionButton) //GoodsAction 商品导航
    // import './assets/style/dailyReward.scss';




new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')