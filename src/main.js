
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import router from './router'

import './style/commom.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

//权限验证
router.beforeEach((to,form,next)=>{
  if(to.fullPath.indexOf('/') != -1){
    next();
    if(to.fullPath.indexOf('/home') != -1){
      let isLogin = localStorage.getItem('username-lhw') != undefined && localStorage.getItem('password-lhw') != undefined
      if(isLogin){
        next();
      }else  {
        router.push('/login')
      }
    }
  }
});

const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h=>h(App)
})

