import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import DetailView from '../views/DetailView.vue';
import UserDashboardView from '../views/UserDashboardView.vue';
import AdminDashboardView from '../views/AdminDashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/user-dashboard',
      name: 'user-dashboard',
      component: UserDashboardView,
    },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView,
    },
  ],
})

export default router
