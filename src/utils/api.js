import http from './http'
//首页轮播图
export function getHomeIndexSlideShow(params) {
    return http.get('/home/banner', params)
}