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
        </ul>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss">
@import '@/assets/style/dailyReward.scss';
    .activityRules_warp{
        position: fixed;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;

    }
</style>