// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { focus } from '@/directives/focus'
import Mock from '@/mock/index.js'
import store from '@/vuex/index.js'

Mock.start()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  directives: {
    focus
  }
})
