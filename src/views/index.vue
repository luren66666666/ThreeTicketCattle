<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/home/recommend">标签</van-tabbar-item>
            <van-tabbar-item icon="search" to="/home/classify">分类</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/home/discover">发现</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/home/information">消息</van-tabbar-item>
            <van-tabbar-item icon="home-o" to="/home/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:0
        }
    },
    components:{
        
    }
}
</script>
<style lang="scss" scoped>

</style>