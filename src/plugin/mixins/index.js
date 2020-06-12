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
        next();
      },
      beforeRouteUpdate(to, from, next) {
        next();
      },
      beforeRouteLeave(to, from, next) {
        next();
      }
    });
  }
};

export default mixin;
