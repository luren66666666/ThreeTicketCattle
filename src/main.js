import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "amfe-flexible";
import './assets/style/dailyReward.css';

import { Button, Tabbar, TabbarItem,NavBar,Circle} from 'vant';
Vue.use(Button);
Vue.use(Tabbar); //Tabbar 标签栏
Vue.use(TabbarItem); //Tabbar 标签栏
Vue.use(NavBar) //导航栏
Vue.use(Circle) //环形进度条


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')