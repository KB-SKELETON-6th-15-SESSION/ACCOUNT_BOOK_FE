import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
<<<<<<< Updated upstream
      path: '/',
      name: 'detail',
      component: () => import('../pages/detailPage.vue'),
    }
=======
      path: '/main',
      name: 'main',
      component: () => import('../pages/MainPage.vue'),
    },
>>>>>>> Stashed changes
  ],
});

export default router;
