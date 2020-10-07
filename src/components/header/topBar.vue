<template>
  <div class="content">
    <div class="m-header-topBar">
      <my-geo />
      <my-nav />
    </div>
  </div>
</template>
<script>
import myGeo from "./geo.vue";
import myNav from "./nav.vue";
export default {
  components: {
    myGeo,
    myNav,
  },
};
</script>