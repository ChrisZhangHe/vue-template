<template>
  <div>alertList-content</div>
</template>
<script>
export default {
  name: "MainPageLeftAlertList",
  inject: ["mainPageBC"],
  created() {
    let that = this;
    setTimeout(() => {
      that.mainPageBC.postMessage({
        type: "mutation",
        param: {
          path: "otherPage/SetAlertId",
          data: "警情ID-123"
        }
      });
    }, 1000);
  }
};
</script>
