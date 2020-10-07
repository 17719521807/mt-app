<template>
    <div class="login-footer">
        <ul class="login-footer-nav">
           <li v-for="item in footerNav" :key="item">{{item}}</li> 
        </ul>
        <div class="login-footer-info">
            ©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            footerNav: ["关于美团", "加入我们", '商家入驻', '帮助中心', '美团手机版'],
        }
    }
}
</script>