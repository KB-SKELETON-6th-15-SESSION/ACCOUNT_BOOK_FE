import DetailPage from "@/pages/detailPage.vue";
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
      name: "detail",
      component: DetailPage,
    },
    {
      path: "/",
      name: "main",
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
  ],
});

export default router;
