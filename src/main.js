import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
// const app = new Vue({
//   vuetify,
//   store,
//   router,
//   i18n,
//   render: h => h(App),
// }).$mount('#app');
// export default app;
