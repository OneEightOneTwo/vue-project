<!--聊天小助手底部-->
<template>
    <footer>
        <ul style="display:flex">
            <li style="flex:1" class="TTalkhead-li1" ><img src="../../../assets/jia.png" alt=""></li>
            <li style="flex:1" class="TTalkhead-li1"><img src="../../../assets/biaoqin.png" alt=""></li>
            <li style="flex:5" class="TTalkhead-li3" v-html="html">
                
            </li>
            <li style="flex:1;marginTop:3px;" class="TTalkhead-li1" @click="gai" :class="{'takeTU1':!bool,'takeTU2':bool}"></li>
        </ul>
    </footer>
</template>
<script>
export default {
    data(){
        return {
            bool:false,
            html:"<input placeholder='输入聊天内容...' style='height:34px;width:220px;border:none;outline:none;color:#b9b9b9;'>"
        }
    },
    methods:{
        gai(){
            this.bool = !this.bool
                if(this.bool == true){
                    this.html="<button style='height:30px;width:210px;border-radius:5px;color:#b9b9b9;outline:none;border: 0;background:#f7e6e1'>按住说话</button>"
                    
                }else if(this.bool == false){
                    this.html="<input placeholder='输入聊天内容...' style='height:34px;width:220px;border:none;outline:none;color:#b9b9b9;'>"
                }
        }
    },
}
</script>
<style scoped>
    html,body{
        margin:0;
        padding:0;
    }
    footer{
        width:100%;
        height:50px;
        color:#000;
        background-color:#fff;
        box-shadow: 0px -1px 3px 0.5px #ccc;
        box-sizing: border-box;
        padding:8px 0;
        position: fixed;
        bottom:0;
        left:0;
    }
    .TTalkhead-li1{
        box-sizing: border-box;
        vertical-align:middle;
        padding-top:5px;
        text-align:center;
        
    }
    .TTalkhead-li3 input{
        height:34px;
        width:220px;
        border:none;
        outline:none;
        color:#b9b9b9;
    }
    .takeTU1{
        background: url(../../../assets/jianpan.png) no-repeat;
    }
    .takeTU2{
        background: url(../../../assets/yuyin.png) no-repeat;
    }
</style>