<template>

    <header>
        <i class="iconfont icon-fanhui" @click="prevhome"></i>
        <span>n个匹配</span>
        
        
    </header>
</template>
<script>
import "../../assets/icon/iconfont.css";
export default {
    methods:{
        prevhome(){
            this.$router.push({name:"home"})
        }
    }
}
</script>

<style scoped>
    html,body{
        margin:0;
        padding:0;
    }
    header{
        width:100%;
        height:50px;
        line-height:50px;
        text-align:center;
        color:white;
        background-color:#1d1c1b;
        border-bottom:1px solid #7c7a77;
        display: flex;
    }
    header i {
        flex: 1
    }
    header span{
        flex:5;
        padding-right:15%; 
    }
</style>
