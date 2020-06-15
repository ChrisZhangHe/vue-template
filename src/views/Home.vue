<template>
  <div class="home">
    home 单屏
    <main-page></main-page>
    <other-page></other-page>
  </div>
</template>
<script>
import mainPage from "./mainPage.vue";
import otherPage from "./otherPage.vue";
export default {
  name: "home",
  components: {
    mainPage,
    otherPage
  },
  data() {
    return {
      value: "chris"
    };
  },
  created() {}
};
</script>
