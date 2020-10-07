<template>
  <div class="m-header-searchBar">
    <div class="content">
      <div class="logo-input">
        <div class="mt-logo">
          <a href="http://localhost:8080/main">
            <img src="@/assets/imgs//logo/logo.png" alt />
          </a>
        </div>
        <div class="mt-input">
          <input
            ref="input"
            type="text"
            placeholder="搜索商家或地址"
            v-model="inputValue"
            @input="getInputData"
            @focus="!isShow ? isShow = true : ''"
          />
          <router-link
            tag="i"
            to="/main/productList"
            class="mirror iconfont icon-search"
            @click.native="searchProduct"
          ></router-link>
          <ul class="input-show-data" v-show="isShow" ref="inputData">
            <li
              v-for="(data, index) in inputData"
              :key="data + index"
              @click="dataClickHandle(data)"
            >{{data}}</li>
          </ul>
        </div>
      </div>
      <ul class="nav">
        <li v-for="(nav, index) in navs" :key="nav.title">
          <a
            href="#"
            @mouseenter="changeColor(index)"
            @mouseleave="changeColor(index)"
            :style="{color: nav.isActive ? nav.color : ''}"
          >{{nav.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: "",
      navs: [
        { title: "美团外卖", color: "#fbc700", isActive: false },
        { title: "猫眼电影", color: "#ed1e24", isActive: false },
        { title: "美团酒店", color: "#f04d4e", isActive: false },
        { title: "民宿/公寓", color: "#FDC411", isActive: false },
        { title: "商家入驻", color: "#FE8C00", isActive: false },
        { title: "美团公益", color: "#f04d4e", isActive: false },
      ],
      inputData: [],
      isShow: false,
    };
  },
  created() {
    document.addEventListener("click", (e) => {
      if (e.target != this.$refs.input && e.target != this.$refs.inputData) {
        this.isShow = false;
      }
    });
  },
  methods: {
    dataClickHandle(data) {
      this.inputValue = data;
      this.isShow = false;
    },
    searchProduct() {
      if(this.inputValue.indexOf('火') != -1) {
      this.axios
        .get("/api/meituan/list/goodsList.json", {
          params: {
            appkey: "lhf604110425_1590916475099",
          },
        })
        .then((res) => {
          this.$store.commit("changeProductList", {
            inputValue: this.inputValue,
            productList: res.data,
          });
        });
      }else {
        this.$store.commit("changeProductList", {
            inputValue: this.inputValue,
            productList: [],
          });
      }

    },
    changeColor(index) {
      const active = this.navs[index].isActive;
      this.navs[index].isActive = !active;
    },
    getInputData() {
      if (this.inputValue) {
        this.axios
          .get("/api/meituan/header/search.json", {
            params: {
              appkey: "lhf604110425_1590916475099",
            },
          })
          .then((res) => {
            this.isShow = true;
            this.inputData = res.data.list.filter((value) => {
              return value.indexOf(this.inputValue) != -1;
            });
          });
      } else {
        this.inputData = [];
        this.isShow = false;
      }
    },
  },
};
</script>