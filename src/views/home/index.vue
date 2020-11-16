<template>
  <v-row>
    <v-col cols="12">
      <v-btn
        color="blue lighten-2"
        dark
        @click="testDialog1 = true"
      >
        Click Me
      </v-btn>
      <v-dialog
        v-if="testDialog1"
        v-model="testDialog1"
        data-app
        width="500"
      >
        <v-card>
          <v-card-title>ok</v-card-title>
          <v-card-text>omega</v-card-text>
        </v-card>
      </v-dialog>
      <v-btn
        icon
        @click="openDialog({ action: 'add' })"
      >
        <v-icon>{{ svgPath.mdiPlus }}</v-icon>
      </v-btn>
      <v-dialog
        v-model="testDialog"
        data-app
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            @click="testDialog = true"
          >
            Click Me
          </v-btn>
        </template>
        <v-card>
          <v-card-title>ok</v-card-title>
          <v-card-text class="omega">
            omega
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-col>
    <v-col
      v-for="(item, key) in orders"
      :key="key"
      cols="12"
      sm="4"
      md="3"
      xl="2"
    >
      <v-card>
        <v-img
          :src="sampleImg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        />
        <v-card-title class="pb-0">
          {{ item.name }}
        </v-card-title>
        <v-card-text class="text-right">
          <div class="my-4 subtitle-1">
            $ {{ item.price }}
          </div>
          <div class="text-left text-truncate">
            {{ item.notes }}
          </div>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            icon
            @click="openDialog({ action: 'edit', item, key })"
          >
            <v-icon>{{ svgPath.mdiFileEdit }}</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="deleteDrink({ action: 'delete', item, key })"
          >
            <v-icon>{{ svgPath.mdiDelete }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <DrinkDialog ref="DrinkDialog" />
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { mdiDelete, mdiFileEdit, mdiPlus } from '@mdi/js'
import DrinkDialog from '@/views/home/components/DrinkDialog'
export default {
  inject: ['sampleImg'],
  name: 'Home',
  components: { DrinkDialog },
  data() {
    return {
      testDialog1: false,
      testDialog: false,
      svgPath: {
        mdiDelete,
        mdiFileEdit,
        mdiPlus,
      },
    }
  },
  computed: { ...mapGetters({ orders: 'orders/orders' }) },
  created() {
    this.initOrders()
    this.orders.map(o => {
      o.picture = this.sampleImg
      return o
    })
  },
  methods: {
    ...mapActions({ initOrders: 'orders/initOrders' }),
    ...mapMutations({ deleteOrder: 'orders/DELETE_ORDER' }),
    deleteDrink({ key }) {
      this.deleteOrder(key)
    },
    openDialog(payload) {
      this.$refs.DrinkDialog.show(payload)
    },
  },
}
</script>
<style lang="scss">
//@import 'src/assets/styles/settings/_color.scss';
@import '~@/assets/styles/settings/_color.scss';
.omega {
  background-color: $message-delete-header-bg;
}
//@import "";
.v-dialog__container {
  //display: unset !important;
}
</style>
