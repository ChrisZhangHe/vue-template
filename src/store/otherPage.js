/* eslint-disable no-shadow */
const state = {
  AlertId: null // 警情ID
};

const mutations = {
  SetAlertId(state, value) {
    state.AlertId = value;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
