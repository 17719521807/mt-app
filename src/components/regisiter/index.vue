<template>
    <div class="regisiter">
        <regisiter-header />
        <regisiter-content />
        <regisiter-footer />
    </div>
</template>
<script>
import regisiterHeader from "./regisiterHeader.vue";
import regisiterContent from "./regisiterContent.vue";
import regisiterFooter from "./regisiterFooter.vue";
export default {
    components: {
        regisiterHeader,
        regisiterContent,
        regisiterFooter,
    }
}
</script>
<style scoped>
@import url("../../assets/css/regisiter/index.css");
</style>