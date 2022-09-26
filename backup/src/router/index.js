import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
const index = () => import('@/components/index')
const profile = () => import('@/components/profile')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
  ]
})
