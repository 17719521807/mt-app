<template>
    <div class="regisiter-content">
    <div class="content">
        <div class="username mt-form">
            <span>手机号</span>
            <input type="text" v-model="username">
        </div>
        <div class="password mt-form">
            <span>创建密码</span>
            <input type="password" v-model="password">
        </div>
        <div class="repassword mt-form">
            <span>确认密码</span>
            <input type="password" v-model="rePassword">
        </div>
        <div class="regisiter-btn">
            <button @click="regisiterClick">同意一下协议并注册</button>
        </div>
        <div class="agreement">
            <a href="/">《美团点评用户服务协议》</a>
            <a href="/"> 《美团点评隐私政策》</a>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            rePassword: '',
        }
    },
    methods: {
        regisiterClick() {
            this.axios.get('/api/meituan/register', {
                params: {
                    userName: this.username,
                    password: this.password,
                    rePassword: this.rePassword,
                    appkey: 'lhf604110425_1590916475099'
                }
            }).then(res => {
                if(res.msg == '注册成功') {
                    alert(res.msg);
                    this.$router.push('/login');
                }else {
                    alert(res.msg);
                }
            })
        }
    }
}
</script>