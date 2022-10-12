import Vue from "vue";
import store from "./store";
import App from "./components/App.vue";

//store.commit("INIT_JOKES", [{ test: "test_joke" }, { test_2: "test_joke_2" }]);

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
