<template>
  <Dialog ref="dialog"> </Dialog>
</template>

<script>
import Dialog from "../../../components/Dialog";
export default {
  name: "DrinkDialog",
  components: {
    Dialog,
  },
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {
    show() {
      console.log(2);
      this.$refs.dialog.show();
    },
  },
};
</script>
