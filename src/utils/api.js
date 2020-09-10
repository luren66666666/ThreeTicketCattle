import http from './http'

//cookie读写删封装。
export let cookie = {
    set: function(key, value, day) {
        let d = new Date();
        d.setDate(d.getDate() + day);
        document.cookie = `${key}=${encodeURIComponent(value)};expires=${d};path=/`;
    },
    get: function(key) {
        let arr = decodeURIComponent(document.cookie).split('; ');
        for (let value of arr) {
            let newarr = value.split('=');
            if (key === newarr[0]) {
                return newarr[1];
            }
        }
    },
    remove: function(key) {
        cookie.set(key, '', -1);
    }
}



//测试获取数据
export function getShiYanShuJu(params) {
    return http.get('https://www.fastmock.site/mock/29b976a75d1031edc331aef0ba19b0ec/api/home/list', params)
}
//城市接口
export function getCityInterface(params) {
    return http.post('http://10.31.155.38:8081/piaoniu/classify/search_addressCity', params)
}