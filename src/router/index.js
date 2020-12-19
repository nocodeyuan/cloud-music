import { createRouter, createWebHistory } from 'vue-router'
import Home from 'views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('views/Register'),
  },
  {
    path: '/userlogin',
    name: 'UserLogin',
    component: () => import('views/UserLogin'),
  },
  {
    path: '/avator',
    name: 'Avator',
    component: () => import('views/Avator'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('views/NotFound'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
