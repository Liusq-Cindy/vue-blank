import Vue from 'vue'
import Router from 'vue-router'
import blank from '@/components/blank'

Vue.use(Router) // 告诉vue使用vue-router
export default new Router({
  routes: [
    {
      path: '/blank',
      name: 'blank',
      component: blank
    }
  ]
})
