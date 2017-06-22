import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
// import siderBar from '@/components/siderBar'
import myCommission from '@/components/myCommission'
import home from '@/components/home'
import withdraw from '@/components/withdraw'
import richText from '@/components/richText'
import dynamic from '../components/Dynamic.vue'
import dynamicTree from '../components/subDynamic-tree.vue'
import dynamicTreeChoose from '../components/subDynamicChoose.vue'
import zouMaDeng from '../components/zouMaDeng.vue'

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
        },{
          path : 'dynamic',
          component : dynamic,
          children : [
            {
              path : "",
              redirect : {name : "deafult-dynamic"}
            },
            {
              path : "dynamicTree",
              name : 'deafult-dynamic',
              component : dynamicTree
            },
            {
              path : 'dynamicChooseTree',
              component : dynamicTreeChoose
            }
          ]
        },{
          path : 'zouMaDeng',
          component : zouMaDeng
        }
      ]
    },{
      path : '/login',
      component: login
    }
  ]
})
