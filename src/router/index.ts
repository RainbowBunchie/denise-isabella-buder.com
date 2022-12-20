import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/data-policy',
      name: 'data-policy',
      component: () => import('../views/DataPolicyView.vue'),
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: () => import('../views/ImprintView.vue'),
    },
    { path: '/:catchAll(.*)', component: () => (window.location.href = '/') },
  ],
  scrollBehavior(to) {
    if (to.params.savePosition) return {};
    else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'auto',
      };
    }
  },
});

export default router;
