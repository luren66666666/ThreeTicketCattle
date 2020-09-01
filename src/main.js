import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "amfe-flexible";

import { Button, Tabbar, TabbarItem, Search, Image as VanImage, Cell, CellGroup, Grid, GridItem } from 'vant';
Vue.use(Button);
Vue.use(Search);
Vue.use(Tabbar); //Tabbar 标签栏
Vue.use(TabbarItem); //Tabbar 标签栏
Vue.use(VanImage);//图片头像
Vue.use(Cell);
Vue.use(CellGroup);//展示箭头
Vue.use(Grid);
Vue.use(GridItem);//Grid

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')