/*
 * @Author: your name
 * @Date: 2020-08-31 20:00:24
 * @LastEditTime: 2020-09-10 15:30:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \票牛\ThreeTicketCattle\src\utils\api.js
 */
import http from './http'
//测试获取数据
export function getShiYanShuJu(params) {
    return http.get('https://www.fastmock.site/mock/29b976a75d1031edc331aef0ba19b0ec/api/home/list', params)
}
// 发现-用户动态接口
export function getHomeDiscover(params) {
    return http.get('http://xx.com/discover/dynamic', params)
}