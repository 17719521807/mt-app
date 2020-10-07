<template>
  <div class="m-header">
    <top-bar />
    <search-bar />
  </div>
</template>
<script>
import topBar from "./topBar.vue";
import searchBar from "./searchBar.vue";
export default {
  components: {
    topBar,
    searchBar,
  },
};
</script>
<style scoped>
@import "../../assets/css/header/index.css";
</style>