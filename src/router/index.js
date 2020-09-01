import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        redirect: '/home/recommend'
    },
    {
        path: '/home',
        component: () =>
            import ('../views/index.vue'),
        children: [{
                path: '/home/recommend',
                component: () =>
                    import ('../components/home/HomeRecommend .vue'),
            },
            {
                path: '/home/classify',
                component: () =>
                    import ('../components/home/HomeClassify.vue'),
            },
            {
                path: '/home/discover',
                component: () =>
                    import ('../components/home/HomeDiscover.vue'),
            },
            {
                path: '/home/information',
                component: () =>
                    import ('../components/home/HomeInformation.vue'),
            },
            {
                path: '/home/mine',
                component: () =>
                    import ('../components/home/HomeMine.vue'),
            },
        ]
    },
    {
        path: '/dailyReward',
        component: () =>
        import ('../components/dailyReward/DailyReward.vue'),
    }
]

const router = new VueRouter({
    routes
})

export default router