<template>
    <div style="background:#f6f5f1;height:667px;">
        <div class="message">
            <p>请输入正确的手机号码，并点击继续</p>
        </div>
        <!-- 表单输入框 -->
        <div>
            <div class="inputBox">
                <div class="leftinput">86</div>
                <div class="rightinput"><input type="text" placeholder="手机号码"> </div>
            </div>
        </div>

        <div class="continue">
            <h6 @click="captcha" class="continueText">继续</h6>

        </div>


    </div>
</template>
<script>
export default {
    methods: {
        captcha(){
            this.$router.push({name:'captcha',id:'1'});

        }
    },

}
</script>
<style scoped>
.message {
  width: 100%;
  height: 6rem;
  line-height: 6rem;
  text-align: center;
  background: #f6f5f1;
  color: #9b9b9b;
}
.inputBox {
  width: 90%;
  height: 50px;
  background: #fff;
  margin: 20px 5%;
  border-radius: 8px;
}
.inputBox .leftinput {
  float: left;
  width: 18%;
  height: 50px;
  vertical-align: middle;
  text-align: center;
  line-height: 50px;
  border-right: 1px #efeeed solid;
}
.inputBox .rightinput {
  float: left;
  width: 80%;
  height: 50px;
}
.inputBox .rightinput input {
  width: 96%;
  height: 50px;
  border: 0;
  outline: none;
  margin: 0px 2%;
}
.continue {
  width: 90%;
  height: 50px;
  background: #e8e6e0;
  margin: 20px 5%;
  border-radius: 10px;
  line-height: 50px;
}
.continue .continueText{
    text-align: center;
    color: #fff;
    font-size: 14px;
}
</style>
