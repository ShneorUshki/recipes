<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    {{ poo }}
    <div>
      <recipe v-for="item in 6" :key="item"></recipe>
    </div>
  </q-page>
</template>

<script>
//import { mapState } from "vuex";
import recipe from "../components/recipe";
export default {
  name: "PageIndex",
  components: { recipe },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("recipes/getRecipes").then(() => {
      //console.log("recipes:", this.recipes);
    });
  },
  computed: {
    /*  ...mapGetters("recipe", ["recipes"]) */
    poo() {
      return this.$store.state.recipes;
    }
  }
};
</script>
