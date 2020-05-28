<template>
  <div class="home">
    <p>abc i a{{ value | capitalize }}</p>
    <el-input v-focus v-model="value" v-bind:id="value | capitalize"></el-input>
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      value: "chris"
    };
  }
};
</script>
