<template>
    <div class="as" style="background:#fff;width:375px;height:668px;">
        <FriendsStateHead />
        <FriendsStateMain />
    </div>
</template>
<script>
    // 头部
    import FriendsStateHead from '../../components/Right_reveal/FriendsState/FriendsStateHead.vue'
    //内容
    import FriendsStateMain from '../../components/Right_reveal/FriendsState/FriendsStateMain.vue'
export default {
    components: {
            FriendsStateHead,
            FriendsStateMain
        }
}
</script>

<style scoped>
    as{
        width:100%;
        height:100%;
        background:#fff
    }
</style>