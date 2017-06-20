
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'
import router from './router'

// import './style/commom.less'
import './style/commom.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h=>h(App)
})
