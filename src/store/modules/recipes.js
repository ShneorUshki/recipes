import { firebaseDb } from "../../boot/firebase";

const state = {
  recipes: null
  /*  recipe: {
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
  } */
};

const mutations = {
  addRecipe(state, recipe) {
    console.log("recipe:", recipe);
  },
  getRecipes(state, recipe) {
    state.recipes = recipe.val();
  }
};

const actions = {
  async getRecipes({ commit }) {
    //console.log("getRecipes");
    let recipes = await firebaseDb.ref("recipes");
    //let snapshot = "";
    recipes.on("value", snapshot => {
      commit("getRecipes", snapshot);
    });
  },

  async addRecipe({ commit }, recipe) {
    await firebaseDb.ref("recipes/" + recipe.recipeID).set(recipe);
    commit("addRecipe", recipe);
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
