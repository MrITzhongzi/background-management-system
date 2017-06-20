import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
// import siderBar from '@/components/siderBar'
import myCommission from '@/components/myCommission'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },{
      path : '/home',
      component : home,
      children: [
        {
          path : '/myCommission',
          component :myCommission
        }
      ]
    },{
      path : '/login',
      component: login
    },

  ]
})
