/* eslint-disable */
import store from "../store/index";

window.$OtherPageEvent = function(param) {
  store.commit("mainPage/SetTestParam", param);
};
// window.$MainPageEvent = function(param) {
//   store.commit("mainPage/SetTestParam", param);
// };
// setTimeout(() => {
//     store.commit("otherPage/SetTestParam", 'otherPage-value-1')
// }, 3000);
