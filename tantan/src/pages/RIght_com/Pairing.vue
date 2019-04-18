<!--朋友圈下面的所有匹配-->
<template>
    <v-touch v-on:swipeleft="swiperleft" class="wrapper" @mouseover="changeMask(index)">
        <div class="pairing">
            <ul>
                <li class="pairing-li">
                    <div class="pairing-left">
                        <div class="pairingImg"><img src="../../assets/girf.png" alt=""></div>
                    </div>
                    <div class="pairing-right" @click="charLike">
                        <div class="pairing-text1">查看喜欢我的人</div>
                        <div class="pairing-text2">Ta喜欢了我，右滑立即配对</div>
                    </div>
                </li>
                <li class="pairing-li">
                    <div class="pairing-left">
                        <div class="pairingImg"><img src="../../assets/logo1.png" alt=""></div>
                    </div>
                    <div class="pairing-right"  @click="toTantanTalk">
                        <div class="pairing-text1">探探小助手</div>
                        <div class="pairing-text2">哎，你最近收到了两个妹子的...</div>
                    </div>
                </li>
            </ul>
            <!-- 下部-->
            <div class="pairing-sign" style="color:#fff">
                <div class="pairing-sign-img"><img src="../../assets/love.png" alt=""></div>
                <div class="pairing-sign-t1">继续滑动!</div>
                <p>每多滑动一次，就多一次机会获</p>
                <p>得配对。配对之后，可以在这里跟</p>
                <p>人聊天</p>
            </div>
        </div>
    </v-touch>

</template>
<script>
import state from '../../observable.js'
export default {
    
    methods: {
        charLike(){
            this.state.isActionsheet = true;
        },
        toTantanTalk(){
            this.$router.push({ name: 'tantanTalk', params: { id: 2 }})
        },
        swiperleft: function () {
            // this.$router.push({name:'RightXuanxian',query:{bool:true}});
            this.bool = !this.bool;
            this.$router.push({'path':'chitchat'});
            
        },
    //     swiperright: function () {
    //     this.$router.push({'path':'Chitchat'});
    // }
    },
    computed:{
        state(){
            return state
        }
    },
}
</script>

<style>
    pairing{
        width:100%;
        height:100%;
        background:#1d1c1b;
    }
    ul li{
        list-style:none;
    }
    .pairing-li{
        width:100%;
        height:70px;
        box-sizing: border-box;
        padding:0 15px;
        background:#1d1c1b;
    }
    .pairing-left{
        float:left;
        height:70px;
        width:70px;
    }
    .pairing-right{
        float:left;
        height:70px;
        width:270px;
        box-sizing: border-box;
        padding:10px 0;
        border-bottom:1px solid #7b7874;
    }
    .pairingImg{
        padding:10px 10px;
        border-radius:50%;
    }
    .pairingImg img{
        width:50px;
        height:50px;
    }
    .pairing-text1{
        color:#ecede7;
        line-height:28px;

    }
    .pairing-text2{
        color:#73746f;
        font-size:14px;
        
    }
    .pairing-sign{
        width:100%;
        text-align:center;
        box-sizing: border-box;
        padding-top:80px;
    }
    .pairing-sign img{
        width:110px;
    }
    .pairing-sign h3{
        font-size:18px;
        margin-top:25px;
        line-height:30px;
    }
    .pairing-sign-img{
        margin-bottom:15px;
    }
    .pairing-sign-t1{
        font-size:20px;
        line-height:35px
    }
    .pairing-sign p{
        font-size:14px;
    }
</style>