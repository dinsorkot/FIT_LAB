import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import SigninView from '../views/SigninView.vue';
import HomeView from '../views/HomeView.vue';
import DashBoardView from '../views/DashBoardView.vue';
import FormView from '../views/FormView.vue';
import ProfileView from '../views/ProfileView.vue'; 
import Setting from '../views/SettingView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoardView
    },
    {
      path: '/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
  ]
})

export default router
