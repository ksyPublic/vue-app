import { createRouter, createWebHistory } from 'vue-router'
import { PortalLayout } from '@/components'

const HomeView = () => import('@/views/home/HomeView.vue')
console.log('!!', HomeView)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home/',
      component: PortalLayout,
      children: [
        {
          path: 'main',
          name: 'homeView',
          component: HomeView
        }
      ]
    },
    {
      path: '/about',
      name: 'about'
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
