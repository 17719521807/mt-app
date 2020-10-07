<template>
    <div class="login-content">
        <div class="img">
            <img src="@/assets/imgs/login/下载.jpg" alt="">
        </div>
        <div class="login-form">
            <div class="select-type clearfix">
                <p>账号登录</p>
                <div class="switch" @click="switchLoginClick">
                    <span>{{switchLogin.span}}</span>
                    <i class="iconfont" :class="{'icon-shouji': switchLogin.icon, 'icon-yonghu': !switchLogin.icon}"></i>
                </div>
            </div>
            <div class="phone-input input">
                <span>+86></span>
                <input type="text" placeholder="手机号" v-model="username">
            </div>
            <div class="code-input input">
                <i class="iconfont icon-iconset0115"></i>
                <input type="text" :placeholder="switchLogin.inputPlaceHolder" v-model="password">
                <span v-show="switchLogin.span == '普通方式登录'">获取手机动态码</span>
            </div>
            <div class="forget-password">
                <span>忘记密码</span>
            </div>
            <div class="login-btn">
                <button @click="loginClick">登录</button>
            </div>
            <div class="free-regisiter" v-show="switchLogin.span == '手机动态码登录'">
                <span>还没有账号?</span>
                <router-link to="/regisiter">免费注册</router-link>
            </div>
            <div class="tips" v-show="switchLogin.span == '普通方式登录'">
                提示：未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意
                <a href="">《美团点评用户服务协议》《美团点评隐私政策》</a>
            </div>
            <div class="oth-login">
                用合作网站账号登录
            </div>
            <div class="oth-internet">
                <i class="iconfont icon-qq"></i>
                <i class="iconfont icon-weibo"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            switchLogin: {
                span: '手机动态码登录',
                inputPlaceHolder: '密码',
                icon: true,
            },
            username: '',
            password: '',
        }
    },
    methods: {
        loginClick() {
            this.axios.get('/api/meituan/login', {
                params: {
                    userName: this.username,
                    password: this.password,
                    appkey: 'lhf604110425_1590916475099'
                }
            }).then(res => {
                if(res.msg == '登录成功') {
                    alert(res.msg);
                    this.$router.push('/main');
                    this.$store.commit('setIsLogin', {isLogin: true, name: '梁鸿飞'});
                }else {
                    alert(res.msg);
                }
            })
        },
        switchLoginClick() {
            if(this.switchLogin.span == '手机动态码登录') {
                this.switchLogin.span = '普通方式登录';
                this.switchLogin.inputPlaceHolder = '动态码';
            }else {
                this.switchLogin.span = '手机动态码登录';
                this.switchLogin.inputPlaceHolder = '密码';
            }
            this.switchLogin.icon = !this.switchLogin.icon;
        }
    }
    
}
</script>