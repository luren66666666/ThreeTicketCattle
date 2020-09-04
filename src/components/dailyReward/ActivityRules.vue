<template>
    <div class="activityRules_warp">
        <!-- 头部 "活动规则" -->
        <van-nav-bar
        title="活动规则"
        left-arrow
        @click-left="onClickLeft"
        class="daily-reward-van-nav-bar__title"
        />
        <ul>
            <li>
                <h5>新手任务</h5>
                <span>完成所有任务后获得新手奖励，仅能获得一次奖励</span>
            </li>
            <li>
                <h5>日常任务</h5>
                <span>-每日完成日常任务，即可获得对应能量值</span>
                <span>-能量值可在任务页面兑换对应优惠券</span>
                <span>-发布的内容如果存在违规行为，会被平台撤回，并收回相应能量值</span>
            </li>
            <li>
                <h5>能量值兑换</h5>
                <span>能量值满足相应优惠券的兑换门槛即可兑换，一经兑出，不可退换。能量值的扣取顺序按照能量值获取时间顺序</span>
            </li>
            <li>
                <h5>有效期</h5>
                <span>能量值自获得之日起生效，30天内可使用，过期即清零。</span>
                <span>有效期内的能量值可以累积使用；</span>
            </li>
        </ul>
        <span id="last">最终解释权归票牛所有</span>
    </div>
</template>


<script>
export default {
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        }
    },
}
</script>


<style lang="scss" scoped>
@import '@/assets/style/dailyReward.scss';
    .activityRules_warp{
        position: fixed;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            li{
                width: 350px;
                margin-bottom: 10px;
            }
            h5{
                margin: 0px;
                
            }
            span{
                font-size: 10px;
                color: #999999;
            }
        }
        #last{
            font-size: 8px;
            color: #999999;
            margin-left: 10px;
        }
    }
</style>