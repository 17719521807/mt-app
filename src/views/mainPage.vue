<template>
  <div class="main">
    <div class="content">
      <mt-type />
      <oth-object />
    </div>
  </div>
</template>
<script>
import mtType from "@/components/main/mtType/index.vue";
import othObject from "@/components/main/othObject/index.vue";
export default {
  components: {
    mtType,
    othObject,
  },
};
</script>