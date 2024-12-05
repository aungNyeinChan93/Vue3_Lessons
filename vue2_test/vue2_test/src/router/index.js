import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('v@/AboutView.vue'),
    },
    {
      path:'/testing',
      name: 'testing',
      component: () => import('v@/TestingView.vue'),
    },
    {
      path:'/localStorage',
      name: 'localStorage',
      component: () => import('v@/LocalStorageView.vue'),
    },
    {
      path:'/propsAndEmit',
      name:'propsAndEmit',
      component: () => import('v@/Props&EmitView.vue'),
    },
    {
      path:'/dependencyInjection',
      name:'dependencyInjection',
      component: () => import('v@/QuizView.vue'),
    },
    {
      path:'/counter',
      name:'counter',
      component: () => import('v@/CounterView.vue'),
    }
  ],
})

export default router
