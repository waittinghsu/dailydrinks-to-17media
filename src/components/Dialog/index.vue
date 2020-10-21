<template>
  <v-dialog v-model="dialog" persistent data-app="true">
    <v-card>
      <v-card-title>
        <span class="headline">{{ headerTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <div slot="dialog-body" />
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <slot name="dialog-footer" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    headerTitle: {
      type: String,
      default: "Add Drink",
    },
    maxWidth: {
      type: [String, Number],
      default: "60vw",
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    show() {
      this.dialog = true;
    },
  },
};
</script>
