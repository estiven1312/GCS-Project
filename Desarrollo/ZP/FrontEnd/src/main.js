import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "./assets/sass/style.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

createApp(App).use(bootstrap).mount("#app");
