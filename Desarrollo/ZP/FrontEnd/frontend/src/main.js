import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/sass/style.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
let login = false;
createApp(App).use(store).use(router).mount("#app");
