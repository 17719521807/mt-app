<template>
  <div class="m-footer">
    <div class="content">
      <mt-info />
      <othInfo />
    </div>
  </div>
</template>
<script>
import mtInfo from "./mtInfo.vue";
import othInfo from "./othInfo.vue";
export default {
  components: {
    mtInfo,
    othInfo,
  },
};
</script>
<style scoped>
@import url("../../assets/css/footer/index.css");
</style>