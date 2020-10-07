<template>
  <div class="my-type">
    <p>全部分类</p>
    <div
      class="firstMenu"
      v-for="(firstType, index) in typeData"
      :key="firstType.type"
      @mouseenter="changeStatus(index)"
      @mouseleave="changeStatus(index)"
    >
      <a href="#">{{firstType.name}}</a>
      <i class="iconfont icon-xiayiyedanjiantou"></i>
      <second-menu :items="firstType.items" v-if="isActive[index]" />
    </div>
  </div>
</template>
<script>
import secondMenu from "./myTypeSecondMenu.vue";
export default {
  data() {
    return {
      typeData: [],
      isActive: [],
    };
  },
  components: {
    secondMenu,
  },
  created() {
    this.axios
      .get("/api/meituan/index/nav.json", {
        params: {
          appkey: "lhf604110425_1590916475099",
        },
      })
      .then((res) => {
        this.typeData = res.data;
        for (let i = 0; i < res.data.length; i++) {
          this.isActive.push(false);
        }
      });
  },
  methods: {
    changeStatus(index) {
      this.$set(this.isActive, index, !this.isActive[index]);
    },
  },
};
</script>