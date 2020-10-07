<template>
  <div class="sub-list">
    <div class="color-tranigle"></div>
    <div class="tranigle"></div>
    <p>{{title}}</p>
    <ul class="child-list">
      <li v-for="item in subList" :key="item.id" @click="$emit('choose', {name: item.name, title: title})">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["subContent"],
  computed: {
    subList() {
      return this.subContent && this.subContent.subList;
    },
    title() {
      return this.subContent && this.subContent.title;
    },
  },
};
</script>