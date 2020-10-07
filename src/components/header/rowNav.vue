<template>
  <ul class="second-nav row" v-if="content">
    <li v-for="item in myContent" :key="item.title">
      <p>{{item.title}}</p>
      <ul>
        <li v-for="value in item.content" :key="value">{{value}}</li>
      </ul>
    </li>
    <li>
      <p>{{content[content.length - 1].title}}</p>
      <ul>
        <li>
          <img src="@/assets/imgs/secondNavIcon/meituan.png" alt />
        </li>
        <li>
          <img src="@/assets/imgs/secondNavIcon/waimai.png" alt />
        </li>
        <li>
          <img src="@/assets/imgs/secondNavIcon/circle.png" alt />
        </li>
        <li>
          <img src="@/assets/imgs/secondNavIcon/dianping.png" alt />
        </li>
        <li>
          <img src="@/assets/imgs/secondNavIcon/maoyan.png" alt />
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["content"],
  computed: {
    myContent() {
      return this.content.filter((value) => {
        return value.title != "手机应用";
      });
    },
  },
};
</script> 