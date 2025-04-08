import { createPinia } from "pinia";
import { createApp } from "vue";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
