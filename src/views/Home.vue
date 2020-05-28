<template>
  <div class="home">
    <permission authId="save">
      <el-button>保存</el-button>
    </permission>
    <permission authId="delete">
      <el-button>删除</el-button>
    </permission>
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
