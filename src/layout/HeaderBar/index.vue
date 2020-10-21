<template>
  <v-app-bar dark app :src="headerImg">
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <slot />
  </v-app-bar>
</template>

<script>
export default {
  // inject:
  name: "HeaderBar",
  props: {
    title: {
      type: String,
      default: "Header HW",
    },
  },
  data() {
    return {
      headerImg: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
    };
  },
};
</script>
