<template>
  <div class="oth-object">
    <all-object
      :titleBackground="'linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104)'"
      :myContent="fatherData"
    />
    <all-object
      :titleBackground="'linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74)'"
      :myContent="fatherData"
    />
    <all-object
      :titleBackground="'linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221)'"
      :myContent="fatherData"
    />
  </div>
</template>
<script>
import allObject from "./allObject.vue";
export default {
  components: {
    allObject,
  },
  data() {
    return {
      fatherData: [],
    };
  },
  created() {
    this.fatherData = this.axios.get(
      "/api/meituan/index/resultsByKeywords.json",
      {
        params: {
          appkey: "lhf604110425_1590916475099",
        },
      }
    );
  },
};
</script>
<style scoped>
@import url("../../../assets/css/mainPage/othObject/index.css");
</style>