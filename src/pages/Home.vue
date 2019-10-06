<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />

    <div>
      <recipe v-for="item in 6" :key="item"></recipe>
    </div>
  </q-page>
</template>

<script>
import recipe from "../components/recipe";
export default {
  name: "PageIndex",
  components: { recipe }
};
</script>
