import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

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
    NavBar
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

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')