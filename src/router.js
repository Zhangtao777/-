import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      redirect:"/about/child",
      component: () => import('./views/About.vue'),
      children:[
        {
          path: '/about/child',
          name: 'aboutchild',
          component: () => import('./views/AboutChild.vue')
        },
      ]
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/Me.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/middle1',
      name: 'middle1',
      component: () => import('./views/yemian/Middle_banner1.vue')
    },
    {
      path: '/middle2',
      name: 'middle2',
      component: () => import('./views/yemian/Middle_banner2.vue')
    },
    {
      path: '/middle3',
      name: 'middle3',
      component: () => import('./views/yemian/Middle_banner3.vue')
    },
  ]
})
