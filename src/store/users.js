const state = {
  users: {
    name: "moshe"
  }
};

const mutations = {};

const actions = {};

const getters = {
  poo: state => {
    return state.users;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
