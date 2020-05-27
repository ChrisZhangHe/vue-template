/* eslint-disable no-shadow */
const state = {
  count: 0
};
const mutations = {
  increment(state, value) {
    state.count = value;
  }
};
const actions = {
  ayncIncrement(state, value) {
    setTimeout(() => {
      state.count = value;
    }, 1000);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
