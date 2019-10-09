<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-item class="text-right">
          <q-btn flat round color="primary" icon="share" />
          <q-btn flat round color="teal" icon="bookmark" />
          <q-item-section>
            <q-item-label>Title</q-item-label>
            <q-item-label caption>Subhead</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            </q-avatar>
          </q-item-section>
        </q-item>

        <q-img :src="food">
          <div class="text-h6 absolute-bottom text-right">Title</div>
        </q-img>
        <q-btn flat round color="red" icon="favorite" />

        <q-card-section class="text-right">
          <div>
            <span>3</span>
            <q-icon name="trending_up" style="font-size: 2.4em;" />

            <span>15 min</span>
            <q-icon name="schedule" style="font-size: 2.4em;" />
          </div>

          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>

          <q-rating size="24px" v-model="stars" :max="5" />
        </q-card-section>

        <q-card-section>{{ lorem }}</q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "recipe",
  data() {
    return {
      food:
        "http://img.taste.com.au/UZVXAdo7/taste/2016/11/chinese-egg-noodle-and-vegetable-stir-fry-94186-1.jpeg",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stars: 4
    };
  }
};
</script>

<style lang="scss">
.my-card {
  width: 100%;
  max-width: 100%;
}
</style>
