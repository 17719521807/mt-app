<template>
  <div class="m-geo">
    <div class="position">
      <i class="icon-location iconfont"></i>
      {{address}}
    </div>
    <div class="changeCity">
      <router-link tag="span" to="/main/cityList">切换城市</router-link>
      <span>[</span>
      <router-link tag="span" to="/">门头沟区</router-link>
      <router-link tag="span" to="/">大厂回族自治县</router-link>
      <router-link tag="span" to="/">廊坊</router-link>
      <router-link tag="span" to="/">]</router-link>
    </div>
    <div class="login" @click="loginClick">{{loginName}}</div>
    <div class="register" @click="regisiterClick">{{regisiterName}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      address: '北京',
    };
  },
  created() {
    this.setAddress();
  },
  watch: {
    "$store.state.address"() {
      this.address = this.$store.state.address;
    }
  },
  computed: {
    loginName() {
      return this.$store.state.isLogin ? this.$store.state.name : '立即登录';
    },
    regisiterName() {
      return this.$store.state.isLogin ? '退出' : '注册';
    }
  },
  methods: {
    loginClick() {
      if(this.loginName == '立即登录') {
        this.$router.push('/login');
      }
    },
    regisiterClick() {
      if(this.regisiterName == '退出') {
        this.$store.state.isLogin = false;
      }else {
        this.$router.push('/regisiter');
      }
    },
    setAddress() {
      this.$store.commit('setAddress', {
        address: this.address,
      });
    }
  }
  
};
</script>