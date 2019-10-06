<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div>
        <q-btn-toggle
          v-model="status"
          class="my-custom-toggle"
          no-caps
          rounded
          unelevated
          toggle-color="primary"
          color="white"
          text-color="primary"
          :options="[
          {label: 'public', value: 'one'},
          {label: 'Private', value: 'two'}
        ]"
        />
      </div>

      <q-input
        filled
        v-model="recipeName"
        label="כותרת המתכון *"
        hint="כותרת ראשית שנדע לזהות"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'בבקשה אל תשאיר אותי ריק']"
      />
      <q-input
        filled
        v-model="time"
        label="זמן הכנה *"
        hint="כמה זמן לוקח להכין את המתכון"
        type="number"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'בבקשה אל תשאיר אותי ריק']"
      />
      <q-input
        filled
        v-model="url"
        label="כתובת אתר *"
        hint="הדבק כותבת אתר לשמירת מתכון"
        type="url"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'בבקשה אל תשאיר אותי ריק']"
      />

      <q-badge color="secondary">דרגת קושי</q-badge>
      <q-slider
        v-model="Difficulty"
        label
        label-always
        color="green"
        markers
        snap
        :min="0"
        :max="10"
      />

      <q-input filled v-model="Ingredients" label="מרכיבים" />
      <q-input filled v-model="Preparation" label="אופן ההכנה" />

      <div class="q-gutter-sm">
        <q-radio keep-color v-model="type" val="orange" label="פרווה" color="orange" />
        <q-radio keep-color v-model="type" val="red" label="בשרי" color="red" />
        <q-radio keep-color v-model="type" val="cyan" label="חלבי" color="cyan" />
      </div>
 <q-btn label="Submit" @click="addUP" color="primary" />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      status: "one",
      recipeName: null,
      time: null,
      url: null,
      Difficulty: 0,
      Ingredients: null,
      Preparation: null,
      type: ""
    };
  },
  computed: {
    ...mapGetters('recipe', ['recipes'])
  },
  methods: {
    ...mapActions('recipe', ['addUp']),
    
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.recipeName = null;
      this.age = null;
    }
  }
};
</script>