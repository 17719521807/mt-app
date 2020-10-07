<template>
  <div class="secondMenu">
    <dl v-for="item in items" :key="item.title">
      <dt>
        <a href="#">{{item.title}}</a>
        <a href="#">
          更多
          <i class="iconfont icon-xiayiyedanjiantou"></i>
        </a>
      </dt>
      <div class="dd">
        <dd v-for="childItem in item.items" :key="childItem">
          <a href="#">{{childItem}}</a>
        </dd>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["items"],
  data() {
    return {
      contents: this.items,
    };
  },
};
</script>