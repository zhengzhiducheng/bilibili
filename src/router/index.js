import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component:() => import('@/pages/index.vue')
    },
    {
      path: '/animation',
      name: 'animation',
      component:() => import('@/pages/animation.vue')
    },
    {
      path: '/drama',
      name: 'drama',
      component:() => import('@/pages/drama.vue')
    },
    {
      path: '/aimtron',
      name: 'aimtron',
      component:() => import('@/pages/aimtron.vue')
    },
    {
      path: '/music',
      name: 'music',
      component:() => import('@/pages/music.vue')
    },
    {
      path: '/dance',
      name: 'dance',
      component:() => import('@/pages/dance.vue')
    }
  ]
})
