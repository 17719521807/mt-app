<template>
  <div class="slide-show-area">
    <div class="top">
      <slide-show />
      <div class="casual-living">
        <a href="#">
          <img src="@/assets/imgs/slideShowArea/casualLiving.jpg" alt />
        </a>
      </div>
    </div>
    <ul class="bottom">
      <li v-for="img in imgs" :key="img.default">
        <a href="#">
          <img :src="img" alt />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import slideShow from "./slideShow.vue";
export default {
  components: {
    slideShow,
  },
  data() {
    return {
      imgs: [
        require("@/assets/imgs/slideShowArea/hotel.jpg"),
        require("@/assets/imgs/slideShowArea/addPost.jpg"),
        require("@/assets/imgs/slideShowArea/shopPartner.png"),
      ],
    };
  },
};
</script>