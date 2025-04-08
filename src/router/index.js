import ReportPage from "@/pages/ReportPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/report",
      name: "Report",
      component: ReportPage,
    },
  ],
});

export default router;
