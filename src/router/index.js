import { createRouter, createWebHistory } from 'vue-router';
import ProfilePage from '@/pages/ProfilePage.vue';
import ModifyPage from '@/pages/ModifyPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'detail',
      component: () => import('../pages/detailPage.vue'),
    },
  ],
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: ProfilePage,
    },
  ],
  routes: [
    {
      path: '/',
      name: 'Modify',
      component: ModifyPage,
    },
  ],
});

export default router;
