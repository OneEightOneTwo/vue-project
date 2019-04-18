<!--探探小助手聊天界面-->
<template>
    <div style="background:#fff;width:375px;height:667px;color:red">
        <TTalkHead />
        <TTalkFooter />
        <TTalkMain />
    
    </div>
</template>
<script>
    // 头部
    import TTalkHead from '../../components/Right_reveal/TantanTalk/TTalkHead.vue'
    //底部
    import TTalkFooter from '../../components/Right_reveal/TantanTalk/TTalkFooter.vue'
    //中间内容
    import TTalkMain from '../../components/Right_reveal/TantanTalk/TTalkMain.vue'
    export default {
        components: {
            TTalkHead,
            TTalkFooter,
            TTalkMain
        }
    }
</script>

<style>
    
</style>