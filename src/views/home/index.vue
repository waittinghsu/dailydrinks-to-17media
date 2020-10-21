<template>
  <v-row>
    <v-col cols="12">
      <v-btn icon @click="openDialog({ action: 'add' })">
        <v-icon>{{ svgPath.mdiPlus }}</v-icon>
      </v-btn>
    </v-col>
    <v-col v-for="(item, key) in orders" :key="key" cols="4">
      <v-card>
        <v-img
          :src="sampleImg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
        </v-img>
        <v-card-title class="pb-0"> {{ item.name }} </v-card-title>
        <v-card-text class="text-right">
          <div class="my-4 subtitle-1">$ {{ item.price }}</div>
          <div class="text-left text-truncate">
            {{ item.notes }}
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="openDialog({ action: 'edit', item, key })">
            <v-icon>{{ svgPath.mdiFileEdit }}</v-icon>
          </v-btn>
          <v-btn icon @click="deleteDrink({ action: 'delete', item, key })">
            <v-icon>{{ svgPath.mdiDelete }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <DrinkDialog ref="DrinkDialog" />
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { mdiDelete, mdiFileEdit, mdiPlus } from "@mdi/js";
import DrinkDialog from "@/views/home/components/DrinkDialog";
export default {
  inject: ["sampleImg"],
  name: "Home",
  components: {
    DrinkDialog,
  },
  data() {
    return {
      svgPath: { mdiDelete, mdiFileEdit, mdiPlus },
    };
  },
  created() {
    this.initOrders();
    this.orders.map((o) => {
      o.picture = this.sampleImg;
      return o;
    });
  },
  computed: {
    ...mapGetters({ orders: "orders/orders" }),
  },
  methods: {
    ...mapActions({ initOrders: "orders/initOrders" }),
    ...mapMutations({ DELETE_ORDER: "orders/DELETE_ORDER" }),
    deleteDrink({ key }) {
      this.DELETE_ORDER(key);
    },
    openDialog(payload) {
      this.$refs.DrinkDialog.show(payload);
    },
  },
};
</script>

