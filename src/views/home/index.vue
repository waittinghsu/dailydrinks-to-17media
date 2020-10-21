<template>
  <v-row>
    <v-col v-for="(item, key) in orders" :key="key" cols="4">
      <v-card>
        <v-img
          :src="sampleImg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
        </v-img>
        <v-card-title> {{ item.name }} </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>{{ svgPath.mdiFileEdit }}</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>{{ svgPath.mdiDelete }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mdiDelete, mdiFileEdit } from "@mdi/js";
export default {
  inject: ["sampleImg"],
  name: "Home",
  data() {
    return {
      svgPath: { mdiDelete, mdiFileEdit },
      orders: [
        { name: "烏龍綠", price: 20 },
        { name: "珍珠奶茶", price: 60 },
        { name: "生活泡沫綠茶", price: 10 },
        { name: "老虎牙子", price: 55 },
        { name: "QOO", price: 24 },
        { name: "芒果冰沙", price: 120 },
        { name: "白玉熟成清露", price: 55 },
        { name: "檸檬紅擦", price: 25 },
      ],
    };
  },
  created() {
    // console.log(this.svgPath);
  },
};
</script>

