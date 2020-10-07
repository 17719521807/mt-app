<template>
    <div class="content">
        <div class="product-list">
        <main-product-list />
        <recommend-list />
      </div>
  </div>
</template>
<script>
import mainProductList from "./mainProductList.vue";
import recommendList from "./recommendList.vue";
export default {
  components: {
    mainProductList,
    recommendList,
  },
}
</script>