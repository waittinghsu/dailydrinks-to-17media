<template>
  <div id="app">
    <HeaderBar>
      <AddDrinkBtn />
    </HeaderBar>
    <v-container>
      <home />
    </v-container>
  </div>
</template>

<script>
import HeaderBar from "./layout/HeaderBar";
import AddDrinkBtn from "./layout/HeaderBar/component/AddDrinkBtn";
import home from "./views/home";
export default {
  provide() {
    return {
      sampleImg: this.sampleImg,
    };
  },
  name: "App",
  components: {
    AddDrinkBtn,
    home,
    HeaderBar,
  },
  data() {
    return {
      sampleImg:
        "https://images.unsplash.com/photo-1534824394572-a24ff25bbb5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1786&q=80",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 64px;
}
</style>
