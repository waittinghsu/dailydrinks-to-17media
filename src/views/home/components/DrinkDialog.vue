<template>
  <Dialog ref="dialog" :title="headerTitle">
    <div slot="dialog-body">
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            ref="name" v-model="formData.name"
            :rules="[(v) => !!v || 'This field is required']" label="飲品" required
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            ref="price"
            v-model.number="formData.price"
            :rules="[(v) => !!v || 'This field is required']"
            type="number"
            label="價錢"
            hint="須為正整數"
            required
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-textarea
            v-model="formData.notes"
            class="note"
            outlined
            name="input-7-4"
            label="multi-line text"
          />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-text-field
            v-model="formData.picture"
            label="圖片連結"
            readonly
          />
        </v-col>
        <v-col cols="12">
          <v-btn
            class="mr-3" depressed
            small color="error"
            @click="close"
          >
            Close
          </v-btn>
          <v-btn depressed small color="primary" @click="submit">
            Save
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </Dialog>
</template>

<script>
import Dialog from '@/components/Dialog'
import { mapGetters, mapMutations } from 'vuex'
import _ from 'lodash'
export default {
  inject: ['sampleImg'],
  name: 'DrinkDialog',
  components: { Dialog },
  data() {
    return {
      type: 'add',
      key: 0,
      initFormData: {
        name: '',
        price: '',
        notes: '',
        picture: this.sampleImg,
      },
      formData: {},
      api: {
        add: this.ADD_ORDERS,
        edit: this.EDIT_ORDERS,
      },
    }
  },
  created() {
    this.formData = _.cloneDeep(this.initFormData)
  },
  computed: {
    ...mapGetters({ orders: 'orders/orders' }),
    headerTitle() {
      return 'drink'
    },
  },
  methods: {
    ...mapMutations({
      ADD_ORDERS: 'orders/ADD_ORDERS',
      EDIT_ORDERS: 'orders/EDIT_ORDERS',
    }),
    show({ action, item, key }) {
      this.formData = _.cloneDeep(this.initFormData)
      this.type = action
      switch (action) {
      case 'add':
        break
      case 'edit':
        this.key = key
        this.formData = { ...item }
        break
      default:
        break
      }
      this.$refs.dialog.show()
    },
    close() {
      this.$refs.dialog.hide()
    },
    submit() {
      let flag = true;
      ['name', 'price'].forEach(item => {
        if (this.$refs[item] && Object.keys(this.$refs[item]).length !== 0) {
          if (!this.$refs[item].validate(true)) {
            flag = false
          }
        }
      })
      if (flag) {
        this.api[this.type]({
          data: this.formData,
          key: this.key,
        })
      }
      this.close()
      // this.ADD_ORDERS
    },
  },
}
</script>
<style lang="scss">
.note {
  .v-text-field__slot {
    .v-label--active {
      left: -20px !important;
    }
  }
}
.el-dialog {
  &__wrapper {
    .el-dialog {
      &__headerbtn {
        .el-dialog {
          &__close:before {
            content: "X";
          }
        }
      }
    }
  }
}
</style>
