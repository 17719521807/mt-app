<template>
  <div class="slide-show" @mouseenter="isActive = true" @mouseleave="isActive = false">
    <ul class="imgs">
      <transition name="slideShowImg">
        <li v-for="(img) in curImgs" :key="img.id">
          <a href="#">
            <img :src="img.item" alt />
          </a>
        </li>
      </transition>
    </ul>
    <transition name="slideShowActive">
      <div class="arrow" v-if="isActive">
        <div class="left" @click="clickJump('left')">
          <i class="iconfont icon-shangyiyedanjiantou"></i>
        </div>
        <div class="right" @click="clickJump('right')">
          <i class="iconfont icon-xiayiyedanjiantou"></i>
        </div>
      </div>
    </transition>
    <div class="spots">
      <span
        v-for="index in imgs.length"
        :key="index"
        @mouseenter="changeIndex(index - 1)"
        :style="{backgroundColor: (index - 1 == curImgs[0].id) ? '#fff' : ''}"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      timer: null,
      curSpot: [],
      flag: true,
      imgs: [
        { item: require("@/assets/imgs/slideShowArea/1.jpg"), current: true },
        { item: require("@/assets/imgs/slideShowArea/2.jpg"), current: false },
        { item: require("@/assets/imgs/slideShowArea/3.jpg"), current: false },
        { item: require("@/assets/imgs/slideShowArea/4.jpg"), current: false },
        { item: require("@/assets/imgs/slideShowArea/5.png"), current: false },
      ],
      imgIndex: 0,
    };
  },
  methods: {
    clickJump(type) {
      if (type == "left") {
        console.log(this.imgIndex - 1);
        this.changeIndex(--this.imgIndex);
      } else if (type == "right") {
        this.changeIndex(++this.imgIndex);
      }
    },
    changeIndex(index) {
      if (this.flag) {
        this.flag = false;
        index == undefined ? this.imgIndex++ : (this.imgIndex = index);
        if (this.imgIndex >= this.imgs.length) {
          this.imgIndex = 0;
        }
        if (this.imgIndex < 0) {
          this.imgIndex = this.imgs.length - 1;
        }
        for (let i = 0; i < this.imgs.length; i++) {
          this.imgs[i].current = false;
        }
        this.imgs[this.imgIndex].current = true;
        this.flag = true;
      } else {
        return;
      }
    },
  },
  computed: {
    curImgs() {
      let id = null;
      return this.imgs
        .filter((value, index) => {
          if (value.current) {
            id = index;
            return value.current;
          }
        })
        .map((value) => {
          return { id: id, item: value.item };
        });
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.changeIndex();
    }, 1500);
  },
};
</script>