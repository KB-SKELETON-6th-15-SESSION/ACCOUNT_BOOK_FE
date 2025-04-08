import CreatePage from "@/pages/Createpage.vue";

import LoginPage from "@/pages/LoginPage.vue";
import MainPage from "@/pages/MainPage.vue";
import ModifyPage from "@/pages/ModifyPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import ReportPage from "@/pages/ReportPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/main",
      name: "Main",
      component: MainPage,
    },

    {
      path: "/profile",
      name: "Profile",
      component: ProfilePage,
    },
    {
      path: "/modify",
      name: "Modify",
      component: ModifyPage,
    },
    {
      path: "/report",
      name: "Report",
      component: ReportPage,
    },
    {
      path: "/create",
      name: "Create",
      component: CreatePage,
    },
  ],
});

export default router;
