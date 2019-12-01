import Vue from 'vue'
import App from './App.vue'
import routes from './route'
import ZbMobileUi from '../packages/index'
import VueRouter from 'vue-router'

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body)
}, false)

Vue.use(ZbMobileUi)
Vue.use(VueRouter)

const router = new VueRouter({
  base: __dirname,
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
