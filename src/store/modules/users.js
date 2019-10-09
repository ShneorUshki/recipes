import { firebaseDb } from "../../boot/firebase";
/* let ref = firebaseDb.ref("root/user"); */
const state = {
  users: {
    name: "moshe"
  }
};

const mutations = {
  pooBer(state, palode) {
    console.log("palode2:", palode);

    const recipe = {
      recipeID: 22434430,
      status: "public",
      recipeName: "Chicken Scampi Pasta",
      time: 25,
      url: "https://www.foodnetwork.com/recipes/",
      img: "https://www.foodnetwork.com/recipes/",
      difficulty: 3,
      ingredients: {},
      preparation: {
        poo: {
          name: 89,
          names: 856
        }
      },
      type: "fur"
    };

    firebaseDb.ref("recipes/" + recipe.recipeID).set(recipe);
  }
};

const actions = {
  pooBer({ commit }, palode) {
    console.log("palode:", palode);
    commit("pooBer", palode);
  }
};

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
