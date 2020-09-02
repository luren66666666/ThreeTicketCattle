/*
 * @Author: your name
 * @Date: 2020-08-31 20:00:24
 * @LastEditTime: 2020-09-01 21:14:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \票牛\ThreeTicketCattle\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/reset.scss'
import "amfe-flexible";

import { Button, Tabbar, TabbarItem, NavBar, Icon, Tab, Tabs } from 'vant';
Vue.use(Button);
Vue.use(Tabbar); //Tabbar 标签栏
Vue.use(TabbarItem); //Tabbar 标签栏
Vue.use(NavBar); //NavBar 导航栏
Vue.use(Icon); //Icon 图标
Vue.use(Tab); //Tab 标签页
Vue.use(Tabs);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')