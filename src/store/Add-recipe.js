// src/store/showcase/mutations.js

const state = {
  recipes: {
    nama: "123",
    nama2: "123"
  }
};

const getters = {
  recipes: state => {
    return state.recipes;
  }
};
const actions = {
addUp(){
  console.log('ok');
  
}
};
export default {
  namespaced: true,
  state,
  getters,
  actions
};
