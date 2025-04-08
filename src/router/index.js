import { createRouter, createWebHistory } from "vue-router";
import ProfilePage from "@/pages/ProfilePage.vue";
import ModifyPage from "@/pages/ModifyPage.vue";
import ReportPage from "@/pages/ReportPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "detail",
      component: () => import("../pages/detailPage.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../pages/MainPage.vue"),
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