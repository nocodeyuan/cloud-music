import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//404页面
router.beforeEach((to, from, next) => {
  if (to.matched.length !== 0) {
    next()
  } else {
    next({ path: '/404' })
  }
})

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
