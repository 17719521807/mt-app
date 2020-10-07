<template>
  <ul class="second-nav col" v-if="content">
    <router-link tag="li" to="/" v-for="item in content" :key="item">{{item}}</router-link>
  </ul>
</template>
<script>
export default {
  props: ["content"],
};
</script>