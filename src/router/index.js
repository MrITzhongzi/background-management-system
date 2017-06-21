import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
// import siderBar from '@/components/siderBar'
import myCommission from '@/components/myCommission'
import home from '@/components/home'
import withdraw from '@/components/withdraw'
import richText from '@/components/richText'

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
          path : '',
          component :myCommission
        },
        {
          path : 'myCommission',
          component :myCommission
        },
        {
          path : 'withdraw',
          component : withdraw
        },{
          path : 'richText',
          component : richText
        }
      ]
    },{
      path : '/login',
      component: login
    },

  ]
})
