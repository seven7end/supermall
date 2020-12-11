import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

import toast from 'components/common/toast'

//安装toast
Vue.use(toast)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//解决移动端点击300毫米延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
