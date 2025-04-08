import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'detail',
      component: () => import('../pages/detailPage.vue'),
    }
  ],
});

export default router;
