<template>
  <div class="oth-content">
    <slide-show-area />
    <user-info />
  </div>
</template>
<script>
import slideShowArea from "./slideShowArea.vue";
import userInfo from "./userInfo.vue";
export default {
  components: {
    slideShowArea,
    userInfo,
  },
};
</script>