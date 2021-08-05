import { createRouter, createWebHistory } from 'vue-router'


import layout from '@/components/layout/index.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
