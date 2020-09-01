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
    AddressEdit,
    IndexBar,
    IndexAnchor
} from 'vant';
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(AddressEdit) //删除
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
Vue.use(Calendar); //日期
Vue.use(Cell); //日期
Vue.use(Card); //分类列表
Vue.use(Tag); //分类列表

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')