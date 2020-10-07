<template>
  <div class="m-nav">
    <div class="first-nav" v-for="link in links" :key="link.content">
      <router-link to="/" tag="p">{{link.content}}</router-link>
      <second-nav :type="link.type" :content="link.children" />
    </div>
  </div>
</template>
<script>
import secondNav from "./secondNav.vue";
export default {
  components: {
    secondNav,
  },
  data() {
    return {
      links: [
        {
          type: "col",
          content: "我的美团",
          children: ["我的订单", "我的收藏", "抵用券", "账户设置"],
        },
        {
          type: null,
          content: "手机APP",
        },
        {
          type: "col",
          content: "商家中心",
          children: [
            "美团餐饮商户中心",
            "登录商家中心",
            "美团智能收银",
            "我想合作",
            "手机免费开店",
            "餐饮代理商招募",
            "商家申请开票",
            "免费合作美团排队",
          ],
        },
        {
          type: "col",
          content: "美团规则",
          children: ["规则中心", "规则目录", "规则评议院"],
        },
        {
          type: "row",
          content: "网站导航",
          children: [
            {
              title: "酒店旅行",
              content: [
                "国际机票",
                "火车票",
                "民宿",
                "经济型酒店",
                "主题酒店",
                "商务酒店",
                "公寓",
                "豪华酒店",
                "客栈",
                "青年旅舍",
                "度假酒店",
                "别墅",
                "农家院",
              ],
            },
            {
              title: "吃美食",
              content: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"],
            },
            {
              title: "看电影",
              content: [
                "热映电影",
                "热门影院",
                "热映电影口碑榜",
                "最受期待电影",
                "国内票房榜",
                "北美票房榜",
                "电影排行榜",
              ],
            },
            {
              title: "手机应用",
              content: [
                "@/assets/imgs/secondNavIcon/meituan.png",
                "@/assets/imgs/secondNavIcon/waimai.png",
                "@/assets/imgs/secondNavIcon/circle.png",
                "@/assets/imgs/secondNavIcon/dianping.png",
                "@/assets/imgs/secondNavIcon/maoyan.png",
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>