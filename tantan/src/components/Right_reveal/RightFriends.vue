<template>
  <div id="friend">
    <!--编程式导航,实现朋友圈页的关联-->
    <div class="friendBtu" @click="toFriendsState">
      <div class="friendBtu-let">
        <img src="../../assets/pyq.png" alt style="vertical-align:middle; margin-right:5px;">朋友圈
      </div>
      <div class="friendBtu-rig">
        <img src="../../assets/dayu.png" alt style="vertical-align:middle;">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //跳转到朋友圈
    toFriendsState() {
      this.$router.push({ name: "friendsState", params: { id: 123 } });
    }
  }
};
</script>
<style scoped>
#friend {
  width: 100%;
  height: 70px;
  color: white;
  background-color: #1d1c1b;
  box-sizing: border-box;
  padding: 10px 12px;
}
.friendBtu {
  width: 99%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  background-color: #7c7a77;
  line-height: 50px;
  box-sizing: border-box;
  padding: 0 10px;
}
.friendBtu-let {
  float: left;
  font-size: 14px;
}
.friendBtu-rig {
  float: right;
}
</style>