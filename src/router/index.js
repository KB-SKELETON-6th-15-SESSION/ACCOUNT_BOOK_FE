import Createpage from "@/pages/CreatePage.vue";
import DetailPage from "@/pages/DetailPage.vue";
import MainPage from "@/pages/MainPage.vue";
import ModifyPage from "@/pages/ModifyPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import ReportPage from "@/pages/ReportPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/detail",
      name: "Detail",
      component: DetailPage,
    },
    {
      path: "/",
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
      component: Createpage,
    },
  ],
});

export default router;
