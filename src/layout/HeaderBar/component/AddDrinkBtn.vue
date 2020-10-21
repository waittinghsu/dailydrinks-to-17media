<template>
  <div>
    <v-btn icon @click="openDialog">
      <v-icon>{{ svgMdi.mdiPlus }}</v-icon>
    </v-btn>
    <DrinkDialog ref="DrinkDialog"></DrinkDialog>
  </div>
</template>

<script>
import { mdiPlus } from "@mdi/js";
import DrinkDialog from "./DrinkDialog";
export default {
  name: "AddBtn",
  components: {
    DrinkDialog,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      svgMdi: { mdiPlus },
      headerImg: "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
    };
  },
  methods: {
    openDialog() {
      console.log(1);
      this.$refs.DrinkDialog.show();
      console.log("openDialog");
    },
  },
};
</script>
