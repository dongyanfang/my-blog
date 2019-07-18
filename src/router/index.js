import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddBlog from '@/components/AddBlog'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/addBlog',
      name: 'AddBlog',
      component: AddBlog
    }
  ]
})