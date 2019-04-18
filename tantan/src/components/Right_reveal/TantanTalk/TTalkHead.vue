<!--聊天小助手头部-->
<template>
    <header>
        <ul style="display:flex">
            <li style="flex:1" class="TTalkhead-li1" ><img src="../../../assets/zuojiantou.png" alt=""  @click="prev"></li>
            <li style="flex:1" class="TTalkhead-li2"><img src="../../../assets/logo1.png" alt=""></li>
            <li style="flex:4">
                <div class="TTalkhead-title1">探探小助手</div>
                <div class="TTalkhead-title2">刚刚</div>
            </li>
            <li style="flex:1" class="TTalkhead-li1"><img src="../../../assets/gengduo.png" alt=""></li>
        </ul>
    </header>
</template>
<script>
    export default {
        methods: {
            prev(){
                this.$router.go(-1)
            },

        },
    }
</script>
<style scoped>
    html,body{
        margin:0;
        padding:0;
    }
    header{
        width:100%;
        height:60px;
        color:#000;
        background-color:#fff;
        box-shadow: 0px 2px 5px #ccc;
        box-sizing: border-box;
        padding:7px 0;
        position: fixed;
        top:0;
        left:0;
    }
    .TTalkhead-li1{
        box-sizing: border-box;
        vertical-align:middle;
        padding-top:5px;
        text-align:center;
        
    }
    .TTalkhead-li2 img{
        width:37px;
    }
    .TTalkhead-title1{
        font-size:18px;
        color:#d34530;
    }
    .TTalkhead-title2{
        font-size:14px;
        color:#afafaf;
    }
</style>