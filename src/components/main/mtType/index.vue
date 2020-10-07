<template>
  <div class="mt-type">
    <my-type />
    <oth-content />
  </div>
</template>
<script>
import myType from "./myType.vue";
import othContent from "./othContent.vue";
export default {
  components: {
    myType,
    othContent,
  },
};
</script>
<style scoped>
@import url("../../../assets/css/mainPage/mtType/index.css");
</style>