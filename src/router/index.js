/*
 * @Author: your name
 * @Date: 2020-08-31 20:00:24
 * @LastEditTime: 2020-09-01 14:34:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \票牛\ThreeTicketCattle\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //路由重定向
    {
        path: '/',
        redirect: '/home'
    },
    //路由重定向
    {
        path: '/home',
        redirect: '/home/recommend'
    },
    //主页
    {
        path: '/home',
        component: () =>
            import ('../views/index.vue'),
        children: [
            //主页推荐
            {
                path: '/home/recommend',
                component: () =>
                    import ('../components/home/HomeRecommend .vue'),
            },
            //主页分类
            {
                path: '/home/classify',
                component: () =>
                    import ('../components/home/HomeClassify.vue'),
            },
            //主页发现
            {
                path: '/home/discover',
                component: () =>
                    import ('../components/home/HomeDiscover.vue'),
            },
            //主页消息
            {
                path: '/home/information',
                component: () =>
                    import ('../components/home/HomeInformation.vue'),
            },
            //主页我的
            {
                path: '/home/mine',
                component: () =>
                    import ('../components/home/HomeMine.vue'),
            },
        ]
    },
    //服务保障（导航跳转）
    {
        path: '/serviceassurance',
        component: () =>
            import ('../components/serviceAssurance/ServiceAssurance.vue'),
    },
    //每日奖励（导航跳转）
    {
        path: '/dailyreward',
        component: () =>
            import ('../components/dailyReward/DailyReward.vue'),
    },
    //活动规则
    {
        path: '/activityRules',
        component: () =>
            import ('../components/dailyReward/ActivityRules.vue'),
    },
    //日历（导航跳转）
    {
        path: '/calendar',
        component: () =>
            import ('../components/calendar/Calendar.vue'),
    },
    //地址(导航跳转)
    {
        path: '/CitySelection',
        component: () =>
            import ('../components/index/CitySelection.vue'),
    },
    //确认订单（导航跳转）
    {
        path: '/confirmorder',
        component: () =>
            import ('../components/confirmorder/ConfirmOrder.vue'),
    },
    //演出详情（导航跳转）
    {
        path: '/showdetails',
        component: () =>
            import ('../components/showdetails/ShowDetails.vue'),
    },
    //推荐里面的推荐（导航跳转）
    {
        path: '/recommend',
        component: () =>
            import ('../components/recommend/Recommend.vue'),
    },
    //购票,相当于详情页（导航跳转）
    {
        path: '/buyticket',
        component: () =>
            import ('../components/buyticket/BuyTicket.vue'),
    },
    //密码登录（导航跳转）
    {
        path: '/register',
        component: () =>
            import ('../components/register/Register.vue'),
    },
    //手机号登录注册（导航跳转）
    {
        path: '/phoneregister',
        component: () =>
            import ('../components/phoneregister/PhoneRegister.vue'),
    },
    //立即购票（导航跳转）
    {
        path: '/theticketimmediately',
        component: () =>
            import ('../components/theticketimmediately/TheTicketImmediately.vue'),
    },
    //立即购票03（导航跳转）
    {
        path: '/threetheticketimmediately',
        component: () =>
            import ('../components/threetheticketimmediately/ThreeTheTicketImmediately.vue'),
    },
    //圈圈俱乐部（导航跳转）
    {
        path: '/circleclub',
        component: () =>
            import ('../components/circleclub/CircleClub.vue'),
    },
    //免费抽奖（导航跳转）
    {
        path: '/freeprizedraw',
        component: () =>
            import ('../components/freeprizedraw/FreePrizeDraw.vue'),
    },
    //订单详情（导航跳转）
    {
        path: '/lineitem',
        component: () =>
            import ('../components/lineitem/LineItem.vue'),
    },
    //确认订单（导航跳转）
    {
        path: '/confirmorder',
        component: () =>
            import ('../components/confirmorder/ConfirmOrder.vue'),
    },
    //支付订单（导航跳转）
    {
        path: '/payorder',
        component: () =>
            import ('../components/payorder/PayOrder.vue'),
    },
    //404路由
    {
        path: '*',
        component: () =>
            import ('../views/Error404.vue'),
    }
]

const router = new VueRouter({
    routes
})

export default router