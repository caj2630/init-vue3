import { createRouter, createWebHashHistory } from 'vue-router'
const indexPage = () => import('@vws/index.vue')

const aboutPage = () => import('@vws/about.vue')

const routes = [
  {
    path: '/',
    component: indexPage
  },
  {
    path: '/about',
    component: aboutPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
