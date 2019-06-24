import "@styles/main.scss";
import Vue from "vue";
import App from "./App.vue";
import "@filters";
import "@plugins";
import router from "@router";
import store from "@state/store";
import "@components/_globals";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
