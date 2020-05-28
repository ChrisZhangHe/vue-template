/* eslint-disable no-unused-vars */
const mixin = {
  install(Vue) {
    Vue.mixin({
      beforeCreate() {},
      created() {},
      beforeMount() {},
      mounted() {},
      beforeUpdate() {},
      updated() {},
      beforeDestroy() {},
      destroyed() {},
      activated() {},
      deactivated() {},
      beforeRouteEnter(to, from, next) {
        // ...
      },
      beforeRouteUpdate() {},
      beforeRouteLeave(to, from, next) {
        // ...
      }
    });
  }
};

export default mixin;
