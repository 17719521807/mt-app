<template>
  <div class="main-product-list">
      <h1>
        <router-link to="/">北京美团</router-link>
        <span>></span>
        <router-link to="/productList">北京{{$store.state.inputValue}}</router-link>
      </h1>
      <div class="all-product">
        <div class="product">
          <div class="header">
            <div class="already-choose" v-show="alreadyChoose.length != 0">
              <dl>
                <dt>已选条件</dt>
                <dd v-for="(item, index) in alreadyChoose" :key="item.name">
                  {{item.name}}
                  <span @click="deleteChoose(index, item.title)">X</span>
                </dd>
              </dl>
              <div class="delete-all" @click="deleteChoose('all')">清除全部</div>
            </div>
            <div class="type">
              <dl>
                <dt>分类</dt>
                <dd :class="{active: allActive[0]}" @click="clickAll('type', typeList)">全部</dd>
                <dd
                  v-for="(type, index) in typeList"
                  :key="type.title"
                  :class="{active: type.selfActive}"
                  @mouseenter="enterHandle('type', type, index)"
                  @mouseleave="leaveHandle('type', type, index)"
                >
                  {{type.title}}
                  <i class="iconfont icon-xiajiantou" v-if="type.subList"></i>
                  <sub-list
                    v-if="type.subList"
                    :subContent="type"
                    v-show="type.subListActive"
                    @choose="chooseHandle($event, 'type')"
                  />
                </dd>
              </dl>
            </div>
            <div class="area">
              <dl>
                <dt>区域</dt>
                <dd :class="{active: allActive[1]}" @click="clickAll('area', areaList)">全部</dd>
                <dd
                  v-for="(area, index) in areaList"
                  :key="area.title"
                  :class="{active: area.selfActive}"
                  @mouseenter="enterHandle('area', area, index)"
                  @mouseleave="leaveHandle('area', area, index)"
                >
                  {{area.title}}
                  <i class="iconfont icon-xiajiantou" v-if="area.subList"></i>
                  <sub-list
                    v-if="area.subList"
                    :subContent="area"
                    v-show="area.subListActive"
                    @choose="chooseHandle($event, 'area')"
                  />
                </dd>
              </dl>
            </div>
          </div>
          <div class="product-content">
            <ul class="sort-nav">
              <li>智能排序</li>
              <li>价格排序
                <i class="iconfont icon-shangxiajiantou"></i>
              </li>
              <li>人气最高</li>
              <li>评价最高</li>
            </ul>
            <ul class="production" v-if="$store.state.productList.length != 0">
              <li v-for="production in $store.state.productList" :key="production.title">
                <router-link tag="div" class="img" to="/">
                    <img :src="production.image" alt="">
                </router-link>
                <div class="pro-content">
                  <router-link tag="div" to="/" class="title">{{production.title}}</router-link>
                  <div class="score">{{production.score}}</div>
                  <div class="address">{{$store.state.inputValue}}|{{$store.state.address}} {{production.address}}</div>
                  <div class="price">暂无价格</div>
                </div>
              </li>
            </ul>
            <div v-else>对不起，没有您符合的商家</div>
          </div>
        </div>
        
      </div>
      
  </div>
</template>
<script>
import subList from "./subList.vue";
export default {
  data() {
    return {
      timer: 0,
      allActive: [true, true], //控制全部dd的显示
      typeList: [],
      areaList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000,
            },
            {
              name: "昌平",
              id: 12222,
            },
          ],
        },
        {
          title: "南岗区",
          subList: [
            {
              name: "中央大街",
              id: 123,
            },
            {
              name: "西客站",
              id: 11,
            },
            {
              name: "花园街",
              id: 222,
            },
            {
              name: "通乡街/果园街",
              id: 21,
            },
            {
              name: "爱建社区",
              id: 1,
            },
            {
              name: "学府路",
              id: 34,
            },
          ],
        },
      ],
      alreadyChoose: [],
      productions: [],
    };
  },
  components: {
    subList,
  },
  created() {
    this.getTypeList();
    this.changeAreaList();

  },
  computed: {
    typeAndAreaList() {
      return this.typeList.concat(this.areaList);
    }
  },
  methods: {
    clickAll(type, list) {
      type == 'type' ? this.allActive[0] = true : this.allActive[1] = true;
      for(const item in list) {
        list[item].selfActive = false;
      }
      for(let i = 0; i < this.alreadyChoose.length; i++) {
        if(this.alreadyChoose[i].type == type) {
          this.alreadyChoose.splice(i, 1);
        }
      }
    },
    deleteChoose(info, title) {
      if(typeof info == 'number') {
      this.alreadyChoose.splice(info, 1);
      const obj = this.getTypeOrAreaCurIndex({title,});
      obj.list[obj.index].selfActive = false;
      if(this.alreadyChoose.length == 0) {
      for(const item in this.allActive) {
        this.allActive[item] = true;
      }
      }
      }else if(typeof info == 'string' && info == 'all') {
        for(let i = 0; i < this.alreadyChoose.length; i++) {
          const obj = this.getTypeOrAreaCurIndex({title: this.alreadyChoose[i].title});
          obj.list[obj.index].selfActive = false;
        }
        this.alreadyChoose = [];
        
      }
    },
    chooseHandle(info, type) {
      if(type == 'type') {
      for(const item in this.typeList) {
        this.typeList[item].selfActive = false;
      }
      }else if(type == 'area') {
      for(const item in this.areaList) {
        this.areaList[item].selfActive = false;
      }
      }
      const obj = this.getTypeOrAreaCurIndex(info);
      obj.list[obj.index].selfActive = true;
      type == 'type' ? this.allActive[0] = false : this.allActive[1] = false;
      for(const item in this.alreadyChoose) {
        if(this.alreadyChoose[item].type == type) {
          this.alreadyChoose[item].name = info.name;
          this.alreadyChoose[item].title = info.title;
          return;
        }
      }
      this.alreadyChoose.push({title: info.title, name: info.name, type,});
    },
    getTypeOrAreaCurIndex(info) {
      for(let i = 0; i < this.typeList.length; i++) {
        if(info.title == this.typeList[i].title) {
         return {list: this.typeList, index: i}
        }
      }
      for(let i = 0; i < this.areaList.length; i++) {
        if(info.title == this.areaList[i].title) {
         return {list: this.areaList, index: i}
        }
      }
    },
    enterHandle(type, timer, index) {
      clearTimeout(timer.leaveTimer);
      timer.enterTimer = setTimeout(() => {
        if (type == "type") {
          this.typeList[index].subListActive = true;
        } else if (type == "area") {
          this.areaList[index].subListActive = true;
        }
      }, 500);
    },
    leaveHandle(type, timer, index) {
      clearTimeout(timer.enterTimer);
      timer.leaveTimer = setTimeout(() => {
        if (type == "type") {
          this.typeList[index].subListActive = false;
        } else if (type == "area") {
          this.areaList[index].subListActive = false;
        }
      }, 500);
    },
    getTypeList() {
      this.axios
        .get("/api/meituan/list/classify.json", {
          params: {
            appkey: "lhf604110425_1590916475099",
          },
        })
        .then((res) => {
          for (const item in res.data) {
            res.data[item]["subListActive"] = false;
            res.data[item]["selfActive"] = false;
          }
          this.typeList = res.data;
        });
    },
    changeAreaList() {
      for (const item in this.areaList) {
        this.$set(this.areaList[item], "subListActive", false);
        this.$set(this.areaList[item], "selfActive", false);
      }
    },
  },
};
</script>
<style scoped>
@import url("../../assets/css/productList/index.css");
</style>