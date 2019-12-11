import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "element-ui/lib/theme-chalk/index.css";
import "./components/digitalTable";

Vue.config.productionTip = false;

window.vmIns = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
