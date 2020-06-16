<template>
  <div>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    login() {
      window.loginSuccess();
    }
  },
  created() {}
};
</script>
