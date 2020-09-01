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
    //主页home路由
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