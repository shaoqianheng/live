import Vue from 'vue'
import Router from 'vue-router'
import Live from '@/view/Live'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Live',
      component: Live
    }
  ]
})
