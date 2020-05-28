/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const directives = {
  install(Vue) {
    Vue.directive("focus", {
      bind(el, binding, vnode, oldVnode) {},
      inserted(el, binding, vnode, oldVnode) {
        el.focus;
      },
      update(el, binding, vnode, oldVnode) {},
      componentUpdated(el, binding, vnode, oldVnode) {},
      unbind(el, binding, vnode, oldVnode) {}
    });
  }
};

export default directives;
