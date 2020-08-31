<template>
    <div class="classify-center">
        <div class="nav">
        <span class="search-add">杭州</span>
        <img src="../../assets/票牛-分类_slices/形状 1.png" alt="" class="search-img">
        <van-search v-model="value" placeholder="搜索明星、演出、场所、景点" class="search-logo" shape="round"/>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.nav{
    display: flex;
}
    .search-add{
        margin: 10px;
        font-size: 18px;
    }
    .search-img{
        height: 9px;
        width: 10px;
        margin-top: 20px;
    }
    .search-logo{
        width: 300px;
        height: 30px;
        margin-top: 10px;
        
    }
</style>