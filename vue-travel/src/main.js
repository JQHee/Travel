import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'

import 'common/css/reset.css'
import 'common/css/border.css'
import 'common/css/iconfont.css'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
