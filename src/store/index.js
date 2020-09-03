import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city: '杭州', //首页地址切换数据
    },
    mutations: {
        changecity(state, payload) {
            state.city = payload.val
        }
    },
    actions: {},
    modules: {},
    getters: {}
})