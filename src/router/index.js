import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import FirstScreen from 'views/FirstScreen'

const routes = [
  {
    path: '/',
    name: 'FirstScreen',
    component: FirstScreen,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/Home'),
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
    path: '/avatar',
    name: 'Avatar',
    component: () => import('views/Avatar'),
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

//404页面
router.beforeEach((to, from, next) => {
  //判断页面是否存在
  if (to.matched.length !== 0) {
    //访问权限验证
    const tokenStr = store.state.login.to_ken
    // console.log(tokenStr)
    const allowPath = ['/', '/register', '/userlogin']
    const vaild = allowPath.indexOf(to.path) !== -1
    if (vaild || tokenStr) return next()
    next('/userlogin')
  } else {
    next({ path: '/404' })
  }
})

export default router
