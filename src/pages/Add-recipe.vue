<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div>
        <q-btn-toggle
          v-model="recipe.status"
          class="my-custom-toggle"
          no-caps
          rounded
          unelevated
          toggle-color="primary"
          color="white"
          text-color="primary"
          :options="[
            { label: 'public', value: 'public' },
            { label: 'private', value: 'private' }
          ]"
        />
      </div>

      <q-input
        filled
        v-model="recipe.recipeName"
        label="כותרת המתכון *"
        hint="כותרת ראשית שנדע לזהות"
        lazy-rules
      />
      <q-input
        filled
        v-model="recipe.time"
        label="זמן הכנה *"
        hint="כמה זמן לוקח להכין את המתכון"
        type="number"
        lazy-rules
      />
      <!--  <q-input
        filled
        v-model="recipe.url"
        label="כתובת אתר *"
        hint="הדבק כותבת אתר לשמירת מתכון"
        type="url"
        lazy-rules
      /> -->
      <q-select
        filled
        v-model="recipe.category"
        :options="options"
        label="Label (stacked)"
        stack-label
        :dense="dense"
        :options-dense="denseOpts"
      />
      <q-badge color="secondary">דרגת קושי</q-badge>
      <q-slider
        v-model="recipe.Difficulty"
        label
        label-always
        color="green"
        markers
        snap
        :min="0"
        :max="10"
      />

      <q-input filled v-model="recipe.Ingredients" label="מרכיבים" />
      <q-input filled v-model="recipe.Preparation" label="אופן ההכנה" />

      <div class="q-gutter-sm">
        <q-radio
          keep-color
          v-model="recipe.type"
          val="fur"
          label="פרווה"
          color="orange"
        />
        <q-radio
          keep-color
          v-model="recipe.type"
          val="meat"
          label="בשרי"
          color="red"
        />
        <q-radio
          keep-color
          v-model="recipe.type"
          val="milk"
          label="חלבי"
          color="cyan"
        />
      </div>

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {
        recipeID: 0,
        category: null,
        status: "",
        recipeName: null,
        time: null,
        url: "",
        img: "",
        Difficulty: 0,
        Ingredients: {},
        Preparation: {},
        type: ""
      },
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      dense: false,
      denseOpts: false
    };
  },
  methods: {
    onSubmit() {
      this.addRecipe();
    },
    addRecipe() {
      this.createID();
      this.$store.dispatch("recipes/addRecipe", this.recipe).then(() => {
        console.log("addt");
      });
    },
    createID() {
      this.recipe.recipeID += 1;
    }

    /*  onReset() {
      (this.status = null),
        (this.recipeName = null),
        (this.time = null),
        (this.url = null),
        (this.img = null),
        (this.Difficulty = null),
        (this.Ingredients = null),
        (this.Preparation = null),
        (this.type = null);
    } */
  }
};
</script>
