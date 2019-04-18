<template>
    <div style="background:#1d1c1b;">
        <div class="RightNavbar">
            <div class="RightNavbar-item1" :class="{
                'RightNavbar-backc':!bool
            }"  @click="navShow">
                所有匹配
            </div>
            <div class="RightNavbar-item2" :class="{
                'RightNavbar-backc':bool
            }" @click="navShow2">
                聊天
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bool:true
        }
    },
    watch: {
        '$route':'getPath',
        
    },
    methods: {
        navShow() {
            this.$router.push({ name: 'pairing', params: { id: 1 }});
            this.bool=true
        },
         navShow2() {
            this.$router.push({ name: 'chitchat', params: { id: 2 }});
            this.bool=false
        },
        getPath() {
            // this.bool=!this.bool;
            if(this.$route.path=='/rightreveal/Pairing'){
                this.$router.push({ name: 'pairing', params: { id: 1 }});
                this.bool=true
            }else if(this.$route.path=='/rightreveal/chitchat'){
                this.$router.push({ name: 'chitchat', params: { id: 2 }});
                this.bool=false
            }
        },
    },
    created() {
        if (localStorage){
            this.$router.push({ name: 'pairing', params: { id: 1 }});
        }
    },
    
}
</script>
<style scoped>
.RightNavbar{
    width:94%;
    border-radius: 5px;
    box-sizing: border-box;
    margin:0 10px;
    background:#7d7c79;
    border:1px solid #7b7874;
    overflow: hidden;
    color:#7b7874;
    font-size:14px;

}
.RightNavbar-item1{
    width:50%;
    text-align:center;
    float:left;
    height:32px;
    line-height:32px;
    color:#7d7c79;
    background:#fff;
}
.RightNavbar-item2{
    width:50%;
    text-align:center;
    float:right;
    height:32px;
    line-height:32px;
    color:#7d7c79;
    background:#fff;
}
.RightNavbar-backc{
    color:#fff;
    background:#7d7c79;
}
</style>