import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/Home'),
      children: [
        {
          path: '',
          redirect: 'animation'
        },
        {
          path: 'drag',
          name: 'Drag',
          component: () => import('@/pages/Drag')
        },
        {
          path: 'animation',
          name: 'Animation',
          component: () => import('@/pages/Animation')
        }
      ]
    }
  ]
})
