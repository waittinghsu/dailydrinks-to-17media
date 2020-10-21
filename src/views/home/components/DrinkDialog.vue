<template>
  <Dialog ref="dialog" title="test">
    <div slot="dialog-body">
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model="formData.name"
            label="飲品"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model.number="formData.price"
            type="number"
            label="價錢"
            hint="須為正整數"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-textarea
            v-model="formData.notes"
            outlined
            name="input-7-4"
            label="A multi-line optional text"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model="formData.picture"
            label="圖片連結"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn class="mr-3" depressed small color="error" @click="close"
            >Close</v-btn
          >
          <v-btn depressed small color="primary" @click="submit">Save</v-btn>
        </v-col>
      </v-row>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "@/components/Dialog";
import { mapGetters, mapMutations } from "vuex";
import _ from "lodash";
export default {
  inject: ["sampleImg"],
  name: "DrinkDialog",
  components: {
    Dialog,
  },
  data() {
    return {
      initFormData: {
        name: "",
        price: "",
        notes: "",
        picture: this.sampleImg,
      },
      formData: {},
    };
  },
  created() {
    this.formData = _.cloneDeep(this.initFormData);
  },
  computed: {
    ...mapGetters({ orders: "orders/orders" }),
  },
  mounted() {
    console.log("vuex", this.orders);
  },
  methods: {
    ...mapMutations({}),
    show() {
      this.formData = _.cloneDeep(this.initFormData);
      this.$refs.dialog.show();
    },
    close() {
      this.$refs.dialog.hide();
    },
    submit() {
      console.log(this.formData);
      this.$emit("add", this.formData);
    },
  },
};
</script>
