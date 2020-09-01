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

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        redirect: '/home/recommend'
    },
    {
        path: '/login',
        component: () => import('../components/register/Register.vue')
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
    }
]

const router = new VueRouter({
    routes
})

export default router