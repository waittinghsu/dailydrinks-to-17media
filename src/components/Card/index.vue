<template>
  <div class="card">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: {
      type: String,
      default: 'ok',
    },
  },
};
</script>
