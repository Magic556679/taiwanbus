import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'BusDynamics',
        name: 'BusDynamics',
        component: () => import('@/views/BusDynamics.vue'),
      },
    ],
  },
  // {
  //   path: '/BusDynamics',
  //   name: 'BusDynamics',
  //   component: () => import('@/views/BusDynamics.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
