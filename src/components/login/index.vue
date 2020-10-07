<template>
    <div class="mt-login">
        <div class="content">
        <login-header />
        <login-content />
        <login-footer />
        </div>
    </div>
</template>
<script>
import loginHeader from "./loginHeader.vue"
import loginContent from "./loginContent.vue"
import loginFooter from "./loginFooter.vue"
export default {
    components: {
        loginHeader,
        loginContent,
        loginFooter,
    }
}
</script>
<style scoped>
@import url("../../assets/css/login/index.css");
</style>