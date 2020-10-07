<template>
  <div class="all-object">
    <div class="top" :style="{background: titleBackground}">
      <div class="title">
        <p>有格调</p>
        <ul class="nav">
          <li
            v-for="(item, index) in myData"
            :key="item.title"
            :class="{active: item.isActive}"
            @mouseenter="enterHandle(index)"
          >{{item.title}}</li>
        </ul>
      </div>
      <div class="all">
        <a href="#">
          全部
          <i class="iconfont icon-xiayiyedanjiantou"></i>
        </a>
      </div>
    </div>
    <ul class="content">
      <li v-for="(item, index) in contents" :key="item + index">
        <div class="img">
          <img :src="item.image" alt />
        </div>
        <p>{{item.title}}</p>
        <div class="price-address">
          <div class="price">￥{{item.price}}</div>
          <div class="address">{{item.address}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["titleBackground", "myContent"],
  data() {
    return {
      myData: [],
      curIndex: 0,
    };
  },
  computed: {
    contents() {
      return (
        this.myData.length != 0 &&
        this.myData[this.curIndex].content != undefined &&
        this.myData[this.curIndex].content
      );
    },
  },
  created() {
    this.remakeData(this.myContent);
  },
  methods: {
    enterHandle(index) {
      for (let item in this.myData) {
        this.myData[item].isActive = false;
      }
      this.myData[index].isActive = true;
      this.curIndex = index;
    },
    remakeData(data) {
      const arr = [];

      data.then((res) => {
        for (const item in res.data) {
          const obj = {};
          obj["content"] = res.data[item];
          item == "all" ? (obj["isActive"] = true) : (obj["isActive"] = false);
          switch (item) {
            case "all":
              obj["title"] = "全部";
              break;
            case "food":
              obj["title"] = "约会聚餐";
              break;
            case "movie":
              obj["title"] = "电影演出";
              break;
            case "spa":
              obj["title"] = "丽人SPA";
              break;
            case "travel":
              obj["title"] = "品质出游";
              break;
          }
          arr.push(obj);
        }
        this.myData = arr;
      });
    },
  },
};
</script>