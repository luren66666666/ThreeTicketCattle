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

//城市接口
export function getCityInterface(params) {
    return http.post('http://10.31.155.38:8081/piaoniu/classify/search_addressCity', params)
}
//日历接口
export function getData(params) {
    return http.post('http://10.31.155.38:8081/piaoniu/classify/search_myDate', params)
}
//票类型接口接口
export function getTicketType(params) {
    return http.post('http://10.31.155.38:8081/piaoniu/classify/search_type', params)
}
//标签接口
export function getLabel(params) {
    return http.post('http://10.31.155.38:8081/piaoniu/classify/search_label', params)
}


//手机号注册，获取验证码
export function getTelCode(params) {
    return http.get('http://10.31.155.71:8081/piaoniu/SMS/sendSMS', params)
}
//手机号结合验证注册或登录
export function getCodeLogin(params) {
    return http.post('http://10.31.155.71:8081/piaoniu/user/register', params)
}
//密码登录
export function getPasswordLogin(params) {
    return http.post('http://10.31.155.71:8081/piaoniu/user/login', params)
}


//首页轮播图
export function getHomeIndexSlideShow(params) {
    return http.get('/home/banner', params)
}
// export function