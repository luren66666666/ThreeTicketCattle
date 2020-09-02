<template>
    <div class="tobuy-container">
         <van-goods-action safe-area-inset-bottom placeholder>
            <van-goods-action-icon icon="service-o" text="客服" color="#EA5639" />
            <van-goods-action-button color="#EA5639" type="danger" :text="tit || '立即购票'" />
        </van-goods-action>
    </div>
</template>
<script>
export default {
    props:{
        tit:String
    }
}
</script>

<style lang="scss">
    .tobuy-container{
          .van-button{
            border-radius: 0;
            font-size: 14px;
            font-family: Medium;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 40px;
        }
    }
</style>