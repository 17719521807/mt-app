<template>
  <div class="user-info">
    <keep-alive>
      <component :is="componentName"/>
    </keep-alive>
    <div class="bottom">
      <div class="img">
        <img src="@/assets/imgs/slideShowArea/download-qr.png" alt />
      </div>
      <p>美团APP手机版</p>
      <p>
        <span>1元起</span>
        吃喝玩乐
      </p>
    </div>
  </div>
</template>
<script>
import noLogin from "./noLogin.vue"
import loginTrue from "./loginTrue.vue"
export default {
  computed: {
    componentName() {
      return this.$store.state.isLogin ? 'loginTrue' : 'noLogin';
    }
  },
  components: {
    noLogin,
    loginTrue,
  }
};
</script>