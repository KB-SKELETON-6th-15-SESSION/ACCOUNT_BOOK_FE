import { createPinia } from "pinia";
import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

import {
  faBus,
  faEllipsis,
  faFileInvoiceDollar,
  faGamepad,
  faGift,
  faMoneyBillWave,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFileInvoiceDollar,
  faGift,
  faBus,
  faUtensils,
  faMoneyBillWave,
  faGamepad,
  faEllipsis
);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
