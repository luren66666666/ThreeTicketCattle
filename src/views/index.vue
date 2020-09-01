<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active" active-color="red" inactive-color="#000" route fixed :placeholder="true" >
            <van-tabbar-item :icon="value.icon" :to="value.to" v-for="(value,index) in vanTabberArr" :key="index">{{value.title}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:0,
            vanTabberArr:[{
                to:'/home/recommend',
                title:'推荐',
                icon:'wap-home-o'
            },
            {
                to:'/home/classify',
                title:'分类',
                icon:'comment-o'
            },
            {
                to:'/home/discover',
                title:'发现',
                icon:'aim'
            },
            {
                to:'/home/information',
                title:'消息',
                icon:'chat-o'
            },
            {
                to:'/home/mine',
                title:'我的',
                icon:'contact'
            }]
        }
    },
    components:{
        
    }
}
</script>
<style lang="scss" >
.van-icon-wap-home-o{
    font-size: 21px;
}
.van-tabbar-item__text{
    font-size: 10px;
}
</style>