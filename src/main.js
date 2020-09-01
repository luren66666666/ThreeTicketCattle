import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "amfe-flexible";

import { Button, Tabbar, TabbarItem, Search, Icon } from 'vant';
Vue.use(Button); //Button 按钮
Vue.use(Search); //Search 搜索
Vue.use(Tabbar); //Tabbar 标签栏
Vue.use(TabbarItem); //Tabbar 标签栏
Vue.use(Icon); //Icon 图标

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')