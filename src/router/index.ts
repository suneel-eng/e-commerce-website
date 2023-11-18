import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue')
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if(to.name === "home") {
      return { top: savedPosition ? savedPosition.top : 0, behavior: "instant" };
    }
    return { top: 0, behavior: "instant" };
  }
})

export default router
