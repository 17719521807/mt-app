<template>
  <div id="container">
    <div id="header">
      <my-header />
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
    <div id="footer">
      <my-footer />
    </div>
  </div>
</template>
<script>
import myHeader from "@/components/header/index.vue";
import myFooter from "@/components/footer/index.vue";
export default {
  components: {
    myHeader,
    myFooter,
  },
};
</script>