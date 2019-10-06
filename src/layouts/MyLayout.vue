<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-positive">
        <div class="cursor-pointer non-selectable">
          <q-btn flat round icon="more_vert" />
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list class="text-right" style="min-width: 100px">
              <q-item clickable v-ripple>
                <q-item-section>Having fun</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Crazy for transitions</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-ripple>
                <q-item-section>Mind blown</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <q-btn flat round icon="add" to="Add-recipe" />
        <q-space />

        <div class="q-mr-sm">המתכונים שלי</div>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="right"
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list class="text-right" padding>
          <q-item clickable v-ripple to="/">
            <q-item-section>Inbox</q-item-section>

            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>
          </q-item>
          
          <q-item clickable v-ripple>
            <q-item-section>Star</q-item-section>

            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Send</q-item-section>

            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Drafts</q-item-section>

            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">שניאור זלמן אושקי</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
