import http from './http'
//测试获取数据
export function getShiYanShuJu(params) {
    return http.get('https://www.fastmock.site/mock/29b976a75d1031edc331aef0ba19b0ec/api/home/list', params)
}