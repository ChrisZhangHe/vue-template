import Vue from "vue";
import Vuex from "vuex";
import common from "./common";
import mainPage from "./mainPage";
import otherPage from "./otherPage";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    mainPage,
    otherPage
  }
});
