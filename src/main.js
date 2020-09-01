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
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Tab,
    Tabs
} from 'vant';
Vue.use(Tab)
Vue.use(Tabs) //tab
Vue.use(Grid)
Vue.use(GridItem) //宫格
Vue.use(SwipeItem) //轮播
Vue.use(Swipe) //轮播
Vue.use(Button); //按钮
Vue.use(Tabbar); //Tabbar 标签栏
Vue.use(TabbarItem); //Tabbar 标签栏
Vue.use(Search) //搜索

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')