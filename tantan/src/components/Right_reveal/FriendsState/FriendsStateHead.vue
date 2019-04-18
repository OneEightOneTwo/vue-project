<!--朋友圈头部-->
<template>
    <header>
        <ul style="display:flex">
            <li style="flex:1" class="TTalkhead-li1" ><img src="../../../assets/zuojiantou2.png" alt=""  @click="prev"></li>
            <li style="flex:4" class="TTalkhead-li2">朋友圈</li>
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
        background-color:#d34530;
        box-sizing: border-box;
        padding:12px 0;
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
    .TTalkhead-li2{
        color:#fff;
        margin-top:5px;
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