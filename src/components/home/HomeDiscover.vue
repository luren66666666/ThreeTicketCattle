<template>
    <div>
        主页发现
        <div @click="goReward">
           每日奖励
        </div> 
        
            
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        goReward() {
            this.$router.push('/dailyReward')
        }
    },
}
</script>
<style lang="scss">
    
</style>