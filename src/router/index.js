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
    // 首页跳转分类
    {
        path: '/indexClassify',
        component: () =>
            import ('../components/index/IndexClassify.vue')
    },
    //首页跳转show详情
    {
        path: '/showdetails',
        component: () =>
            import ('../components/showdetails/ShowDetails.vue')
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
        path: '/buyticket/:id',
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
        path: '/threetheticketimmediately/:change',
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
    //未标题-5（编辑资料）（导航跳转）
    {
        path: '/editdata',
        component: () =>
            import ('../components/editdata/EditData.vue'),
    },
    //03（霸王票0元任性看演出）（导航跳转）
    {
        path: '/noyuanfortheshow',
        component: () =>
            import ('../components/noyuanfortheshow/NoYuanForTheShow.vue'),
    },
    //未标题-6-恢复的（个人主页）（导航跳转）
    {
        path: '/personalhomepage',
        component: () =>
            import ('../components/personalhomepage/PersonalHomepage.vue'),
    },
    //01(十分现场)（导航跳转）
    {
        path: '/thescene',
        component: () =>
            import ('../components/thescene/TheScene.vue'),
    },
    //我的订单（导航跳转）
    {
        path: '/myorder',
        component: () =>
            import ('../components/myorder/MyOrder.vue'),
    },
    //设置界面（导航跳转）
    {
        path: '/set',
        component: () =>
            import ('../components/set/Set.vue'),
    },
    //未标题-1（收货地址）（导航跳转）
    {
        path: '/addressadministration',
        component: () =>
            import ('../components/addressadministration/AddressAdministration.vue'),
    },
    //修改密码（导航跳转）
    {
        path: '/changepassword',
        component: () =>
            import ('../components/changepassword/ChangePassword.vue'),
    },
    //重置密码（导航跳转）
    {
        path: '/resetpasswords',
        component: () =>
            import ('../components/resetpasswords/ResetPasswords.vue'),
    },
    //404路由
    {
        path: '*',
        component: () =>
            import ('../views/Error404.vue'),
    }
]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // savedPosition在返回的时候生效
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router